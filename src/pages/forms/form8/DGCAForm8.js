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
            otherInfo:{
                data:"other information",
                suggestion:"",
                checked:false
            },
            }

        
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form8 {
                    otherInfo {
                      data
                      suggestion
                      checked
                    }
                  } 
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { form8 } = res.data.license;
            if(form8!==null) {
                this.setState({
                  data: true,
                 // saare variables
                 //otherInfo: form8.otherInfo
                otherInfo:{
                    data: form8.otherInfo.data,
                    suggestion: form8.otherInfo.suggestion,
                    checked: form8.otherInfo.checked
                   }
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

    }

    handleOtherInfoValueChange = (e) => {
        this.setState({
            otherInfo : {
                ...this.state.otherInfo,
                suggestion: e.target.value,
            }
        })
    }

    handleOtherInfoCheckboxChange = (e,checked) => {
        this.setState({
            otherInfo : {
                ...this.state.otherInfo,
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
        const { otherInfo, otherInfo_checked, otherInfo_suggestion, status} = this.state;

        return (
            <Mutation mutation={FORM8}>
            {( form8Function ,{loading,data_res,error}) => {
                    if(loading) return 'loading'
                    if(error) console.log(error);
                    return (
                        <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Further Information</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <DGCAChecklist 
                                            field="Any Other Information" 
                                            value={otherInfo} 
                                            handleChange={this.handleOtherInfoValueChange} 
                                            onChange={this.handleOtherInfoCheckboxChange}
                                        />
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
                                        text="Submit"
                                        onClick={() => {
                                            form8Function({
                                                variables: {
                                                    // saare variables
                                                    id: this.props.match.params.id,
                                                    otherInfo: otherInfo.data,
                                                    otherInfo_defect:otherInfo.checked,
                                                    otherInfo_checked:otherInfo.suggestion,
                                                    status:status
                                                }
                                            })
                                        }}  
                                        allowDisabledFocus 
                                        //disabled={!this.state.isChecked} 
                                        />
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
                    )
                }
            }
            </Mutation>
        )
    }
}

const FORM8=gql`
mutation UpdateForm8(
    $id: String!
    $otherInfo: String
    $otherInfo_error: String
    $otherInfo_defect: Boolean
    $status: FormStatus
  ) {
    updateForm8(
      id: $id
      input: {
        otherInfo: {
          data: $otherInfo
          checked: $otherInfo_defect
          suggestion: $otherInfo_error
        }
        status: $status
      }
    )
  }
`;  
