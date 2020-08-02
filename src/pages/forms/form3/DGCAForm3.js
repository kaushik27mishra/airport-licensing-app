import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';

//style
import '../style.css'
const styles = {
    cardStyles: {
        root: {
          background: 'white',
          paddingTop: 30,
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 50,
          width: '100%',
          maxWidth: '100%',
          margin: 'auto',
          marginTop: 60,
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});


const stackTokens = { childrenGap: 20 };

export default class DGCAForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rightsIfNotOver:{
                data:"Abdkjabd",
                suggestion:"",
                checked:false
            },
            owner: false,
            startPeriod: "19-10-2020",
            endPeriod: "19-10-2120",
            terminationPeriod: "20-10-2120",
            status: "Submitted"
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form3 {
                    owner
                    rightsIfNotOver {
                      data
                      suggestion
                      checked
                    }
                    startPeriod
                    terminationPeriod
                    endPeriod
                  }
                }
              }`,
            variables: { id: id }
        }).then( res => {
            const { form3 } = res.data.license;
            if(form3!==null) {
                this.setState({
                    data: true,
                    // state yahan pe update karna padega
                    rightsIfNotOver:{
                        data: form3.rightsIfNotOver.data,
                        suggestion: form3.rightsIfNotOver.suggestion,
                        checked: form3.rightsIfNotOver.checked
                    },
                    owner: form3.owner,
                    startPeriod: form3.owner,
                    endPeriod: form3.endPeriod,
                    terminationPeriod: form3.terminationPeriod
                })
            }
            else {
                this.setState({
                    data: false
                })
            }

        })

    }

    handleRightsIfNotOverValueChange = (e) => {
        this.setState({
            rightsIfNotOver : {
                ...this.state.rightsIfNotOver,
                suggestion: e.target.value,
            }
        })
    }

    handleRightsIfNotOverCheckboxChange = (e,checked) => {
        this.setState({
            rightsIfNotOver : {
                ...this.state.rightsIfNotOver,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    
    statusOptions = [
        { key: 'Submitted', text: 'Submitted',},
        { key: 'Edited', text: 'Edited' },
        { key: 'NotAproved', text: 'Not Approved' },
        { key: 'Approved', text: 'Approved' },
      ];

    render() {
        const {
            data, 
            rightsIfNotOver,
        owner,
        startPeriod,
        endPeriod,
        terminationPeriod } = this.state;

        if(!data) {
            return <h1>Form yet to be filled</h1>;
        }

        return (
            <Mutation mutation={FORM3}>
            { (form3funstion,{loading, data_res, error}) => {
                if(loading) return 'loading'
                if(error) console.log(error);
                return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Control of the Aerodrome</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Are you the owner of the aerodrome site?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <DGCAChecklist 
                                            field="Details of the rights you hold over the land" 
                                            value={rightsIfNotOver} 
                                            handleChange={this.handleRightsIfNotOverValueChange} 
                                            onChange={this.handleRightsIfNotOverCheckboxChange}
                                        />
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>The period from which you hold these rights</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{startPeriod}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>The period to which you hold these rights</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{endPeriod}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Termination of these rights</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{terminationPeriod}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Approval Status</Text>
                                            </td>
                                            <td>
                                            <Dropdown
                                                    placeholder="Select Status"
                                                    options={this.statusOptions}
                                                    onChange={(e,i) => this.setState({status: i.key})}
                                                    />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus/>
                                    <PrimaryButton
                                        onClick={() => {
                                            if(data) {
                                                form3funstion({variables: {
                                                    // saare variables including defect and error
                                                    id: this.props.match.params.id,
                                                    owner: owner,
                                                    rightsIfNotOver: rightsIfNotOver.data,
                                                    rightsIfNotOver_defect: rightsIfNotOver.checked,
                                                    rightsIfNotOver_error: rightsIfNotOver.suggestion,
                                                    startPeriod: startPeriod,
                                                    terminationPeriod: terminationPeriod,
                                                    endPeriod: endPeriod,
                                                    status: true //Dont know what to add
                                                }})
                                            }
                                        }}  
                                        text="Next" 
                                        allowDisabledFocus/>
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
            )
        }}
        </Mutation>
        )
    }
}

const FORM3 = gql`
mutation UpdateForm3(
    $id: String!
    $owner: Boolean
    $rightsIfNotOver: String
    $rightsIfNotOver_defect: Boolean
    $rightsIfNotOver_error: String
    $startPeriod: String
    $terminationPeriod: String
    $endPeriod: String
    $status: FormStatus
  ) {
    updateForm3(
      id: $id
      input: {
        owner: $owner
        rightsIfNotOver: {
          data: $rightsIfNotOver
          checked: $rightsIfNotOver_defect
          suggestion: $rightsIfNotOver_error
        }
        startPeriod: $startPeriod
        terminationPeriod: $terminationPeriod
        endPeriod: $endPeriod
        status: $status
      }
    )
  }
  
`