import React, { Component } from 'react'

//ui
import { DetailsList } from '@fluentui/react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { mergeStyleSets, Modal, getTheme, FontWeights, Stack } from 'office-ui-fabric-react';

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
            name:"",

        }
    }

    onChange = (event,option) => {
        this.setState({
            name:option.key
        })
    }

    assignInspector = () => {
        console.log(this.state);
        this.onDismiss();
    }

    onDismiss = () => {
        this.setState({
            isModalOpen: false
        })
    }

    onItemInvoked = (item) => {
        if(item.assigned==="UnAssigned") {
            this.setState({
                id:item.id,
                isModalOpen: true
            })
        }
    }

    render() {
        //rows
    const items = [
        {
            id:100,
            airport: 'Indira Gandhi International Airport',
            location: 'Delhi',
            area: '5,106 acres',
            datefrom: '20-05-2020',
            dateto: '20-05-2020',
            assigned: "Assigned"
        },
        {
            id:101,
            airport: 'Indira Gandhi International Airport',
            location: 'Delhi',
            area: '5,106 acres',
            datefrom: '20-05-2020',
            dateto: '20-05-2020',
            assigned: "UnAssigned"
        },
        {
            id:102,
            airport: 'Indira Gandhi International Airport',
            location: 'Delhi',
            area: '5,106 acres',
            datefrom: '20-05-2020',
            dateto: '20-05-2020',
            assigned: "Assigned"
        },
        {
            id:103,
            airport: 'Indira Gandhi International Airport',
            location: 'Delhi',
            area: '5,106 acres',
            datefrom: '20-05-2020',
            dateto: '20-05-2020',
            assigned: "Assigned",
        },
        {
            id:104,
            airport: 'Indira Gandhi International Airport',
            location: 'Delhi',
            area: '5,106 acres',
            datefrom: '20-05-2020',
            dateto: '20-05-2020',
            assigned: "Assigned"
        }
    ]

        //columns blueprint
    const columns = [
        { key: 'column1', iconName: 'Airplane' ,name: '  Name', fieldName: 'airport', minWidth: 100, maxWidth: 250, isResizable: true },
        { key: 'column2', name: 'Location', fieldName: 'location', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column3', name: 'Area', fieldName: 'area', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column4', name: 'License From', fieldName: 'datefrom', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column5', name: 'License To', fieldName: 'dateto', minWidth: 100, maxWidth: 150, isResizable: true },
        { key: 'column6', name: 'Assigned', fieldName: 'assigned', minWidth: 100, maxWidth: 150, isResizable: true },
    ]


    const StateOptions = [
        { key: 'A', text: 'Option a', title: 'I am option a.' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c' },
        { key: 'D', text: 'Option d' },
        { key: 'E', text: 'Option e' },
    ]

        return (
            <div>
                <DetailsList
                    items={items}
                    columns={columns}
                    selectionMode={0}
                    onItemInvoked={this.onItemInvoked}
                />
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
                        <Dropdown
                            placeholder="Select"
                            label="Enter State"
                            onChange={this.onChange}
                            options={StateOptions}
                        />
                    </div>
                    <Stack horizontal tokens={stackTokens}>
                        <PrimaryButton text="Assign" onClick={this.assignInspector} allowDisabledFocus />
                        <DefaultButton text="Close" onClick={this.onDismiss} allowDisabledFocus />
                    </Stack>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default TableRO
