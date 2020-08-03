import React, { Component } from 'react'

//ui
import { DetailsList } from '@fluentui/react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { mergeStyleSets, Modal, getTheme, FontWeights, Stack } from 'office-ui-fabric-react';

import { Query, gql, Mutation } from '@apollo/react-components'

//styles
const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'stretch',
    },
    header: [
        theme.fonts.xLargePlus,
        {
          flex: '1 1 auto',
          borderTop: `4px solid ${theme.palette.themePrimary}`,
          color: theme.palette.neutralPrimary,
          display: 'flex',
          alignItems: 'center',
          fontWeight: FontWeights.semibold,
          padding: '12px 12px 14px 24px',
        },
      ],
    body: {
      flex: '4 4 auto',
      padding: '0 24px 24px 24px',
      overflowY: 'hidden',
      selectors: {
        p: { margin: '14px 0' },
        'p:first-child': { marginTop: 0 },
        'p:last-child': { marginBottom: 0 },
      },
    },
});

const stackTokens = { childrenGap: 20 };

export class TableRO extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isModalOpen: false,          
            id:"",
            inspectorId: "",
            inspectorName:"",

        }
    }

    onChange = (event,option) => {
        this.setState({
            inspectorId: option.key,
            inspectorName: option.name
        })
    }

    onDismiss = () => {
        this.setState({
            isModalOpen: false
        })
    }

    onItemInvoked = (item) => {
        if(item.inspector==="Unassigned") {
            this.setState({
                id: item.id,
                isModalOpen: true
            })
        }
    }

    aerodromeInspector = (i) => {
        if(i===null) {
            return 'Unassigned'
        }
        console.log(i);
        return i.name
    }

    render() {
        //rows
        //columns blueprint
    const columns = [
        { key: 'column1', iconName: 'Airplane' ,name: 'Name', fieldName: 'airport', minWidth: 100, maxWidth: 250, isResizable: true },
        { key: 'column2', name: 'City', fieldName: 'city', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column3', name: 'State', fieldName: 'state', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column4', name: 'Owner', fieldName: 'owner', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column5', name: 'Inspector', fieldName: 'inspector', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column6', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 150, isResizable: true },
    ]


        return (
            <div>
                <Query query={LIST_OF_LICENSE} variables={{ status: this.props.status }}>
                    {({ loading, error, data}) => {
                            if(loading) return`Loading`
                            if(error) return 'error'
                            if(data.licenses.length!==0) {
                                return (
                                    <DetailsList
                                        items={data.licenses.map(i => ({ id: i.id ,airport: i.aerodrome.placeName, city: i.aerodrome.city, state: i.aerodrome.state, inspector: this.aerodromeInspector(i.inspector), owner: i.aerodrome.owner.name, status: i.status}))}
                                        columns={columns}
                                        onItemInvoked={this.onItemInvoked}
                                        selectionMode={0}
                                    />
                                )
                            }
                            return (
                              <h1>No Licenses Pending</h1>
                            )
                        }
                    }
                </Query>
                <Mutation mutation={ASSIGN_INSCPECTOR}>
                    {(assignInspector, {loading, error, data}) => {
                    if(loading) return 'loading'
                    if(error) console.log(error);
                    return (
                        <Modal
                            onDismiss={this.onDismiss}
                            isOpen={this.state.isModalOpen}
                            containerClassName={contentStyles.container}
                        >
                        <div className={contentStyles.header}>
                            <span>Select Inspector</span>
                        </div>
                        <div className={contentStyles.body}>
                        <div style={{paddingTop: "20px",paddingBottom: "30px"}}>
                        <Query query={LIST_OF_INSPECTOR} variables={{ role: "AerodromeInspector" }}>
                        {({ loading, error, data}) => {
                                if(loading) return`Loading`
                                if(error) return 'error'
                            return (
                                <Dropdown
                                    placeholder="Select"
                                    label="Enter Inspector"
                                    onChange={this.onChange}
                                    options={data.users.map((i) =>({key: i.id, text: i.name}))}
                                />
                                )
                            }
                        }
                        </Query>
                        </div>
                        <Stack horizontal tokens={stackTokens}>
                            <PrimaryButton 
                                text="Assign" 
                                onClick={() => {
                                    assignInspector({ variables: { id: this.state.id, inspectorId: this.state.inspectorId }})
                                }} 
                                allowDisabledFocus />
                            <DefaultButton text="Close" onClick={this.onDismiss} allowDisabledFocus />
                        </Stack>
                        </div>
                    </Modal>
                    );
                }}
                </Mutation>
            </div>
            )
    }
}

export default TableRO;

const LIST_OF_LICENSE = gql`
query Licenses($status: String){
    licenses(filter: {
      status: $status
    }) {
      id
      status
      operator {
        id
        name
      }
      inspector {
        id
        name
      }
      aerodrome {
        placeName
        state
        city
        owner {
          name
        }
      }
    }
  }
  `;

const LIST_OF_INSPECTOR = gql`
query Users($role: Roles){
	users(role: $role) {
    id
    name
  }    
}`
;

const ASSIGN_INSCPECTOR = gql`
mutation AssignInspector($id: String!, $inspectorId: String!) {
    assignInspector(id: $id, inspectorId: $inspectorId)
  }
`;  

