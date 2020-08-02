import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

//style
import '../style.css'

import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';

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
            calculationSheet:{
                data:null,
                suggestion:"",
                checked:false
            },
            challanNo:"0000",
            amount:"0000",
            nameofDraweeBank: "xxxx",
            dateOfChallan: "14-10-2020"

        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form7 {
                    challanNo
                    amount
                    calculationSheet {
                      data
                      checked
                      suggestion
                    }
                    nameofDraweeBank
                    dateOfChallan
                  }
                }
              }`,
            variables: { id: id }
        }).then( res => {
            const { form7 } = res.data.license;
            if(form7!==null) {
                this.setState({
                  data: true,
                  calculationSheet:{
                    data: form7.calculationSheet.data,
                    suggestion: form7.calculationSheet.suggestion,
                    checked: form7.calculationSheet.checked
                },
                challanNo: form7.challanNo,
                amount: form7.amount,
                nameofDraweeBank: form7.nameofDraweeBank,
                dateOfChallan: form7.dateOfChallan
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

    }

    handleCalculationSheetValueChange = (e) => {
        this.setState({
            calculationSheet : {
                ...this.state.calculationSheet,
                suggestion: e.target.value,
            }
        })
    }

    handleCalculationSheetCheckboxChange = (e,checked) => {
        this.setState({
            calculationSheet : {
                ...this.state.calculationSheet,
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
            challanNo,
            amount,
            calculationSheet,
            nameofDraweeBank,
            dateOfChallan
        
        } = this.state;

        if(!data)
            return <h1>Forms yet to be filled</h1>

        return (
            <Mutation mutation={FORM7}>
            {(form7Function,{loading,data_res,error}) => {
                    if(loading) return 'loading'
                    if(error) console.log(error);
            return (
                    <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Details of Fees</Text>
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
                                            <Text variant={'large'}>Challan No. for online deposit</Text>
                                        </td>
                                        <td>
                                            <Text variant={'large'}><em>{challanNo}</em></Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{maxWidth:"150px"}}>
                                            <Text variant={'large'}>Amount</Text>
                                        </td>
                                        <td>
                                            <Text variant={'large'}><em>{amount}</em></Text>
                                        </td>
                                    </tr>
                                    <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Sheet showing the calculation of 
                                                amount as per runway length</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get" action={calculationSheet}>
                                                        <button type="submit">Download Resume</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                <Checkbox checked={calculationSheet.checked} 
                                                    onChange={this.handleCalculationSheetCheckboxChange} />
                                            </td>
                                            <td>
                                                <TextField 
                                                    name="suggestion"
                                                    onChange={this.handleCalculationSheetValueChange}
                                                    value={calculationSheet.suggestion}
                                                    disabled={!calculationSheet.checked}
                                                />
                                            </td>
                                        </tr>
                                    <tr>
                                        <td style={{maxWidth:"150px"}}>
                                            <Text variant={'large'}>Name of the drawee bank</Text>
                                        </td>
                                        <td>
                                            <Text variant={'large'}><em>{nameofDraweeBank}</em></Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{maxWidth:"150px"}}>
                                            <Text variant={'large'}>Date of the drawee bank</Text>
                                        </td>
                                        <td>
                                            <Text variant={'large'}><em>{dateOfChallan}</em></Text>
                                        </td>
                                    </tr>
                                    {/*Local authority extra in db*/}
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
                                        text="Next"
                                        onClick={() => {
                                            form7Function({
                                                variables: {
                                                    // saare variables
                                                    id: this.props.match.params.id,
                                                    challanNo: challanNo,
                                                    amount: amount,
                                                    calculationSheet: calculationSheet.data,
                                                    calculationSheet_defect: calculationSheet.checked,
                                                    calculationSheet_error: calculationSheet.suggestion,
                                                    nameofDraweeBank: nameofDraweeBank,
                                                    dateOfChallan: dateOfChallan,
                                                    //status: status ////Check this once please
                                                }
                                            })
                                           
                                        }} 
                                    allowDisabledFocus />
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

const FORM7 = gql`
mutation UpdateForm7(
    $id: String!
    $challanNo: String
    $amount: String
    $calculationSheet: String
    $calculationSheet_defect: Boolean
    $calculationSheet_error: String
    $nameofDraweeBank: String
    $dateOfChallan: String
    $status: FormStatus
  ) {
    updateForm7(
      id: $id
      input: {
        challanNo: $challanNo
        amount: $amount
        calculationSheet: {
          data: $calculationSheet
          suggestion: $calculationSheet_error
          checked: $calculationSheet_defect
        }
        nameofDraweeBank: $nameofDraweeBank
        dateOfChallan: $dateOfChallan
        status: $status
      }
    )
  }
`;  