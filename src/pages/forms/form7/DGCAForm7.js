import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

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


    render() {
        const {
            challanNo,
            amount,
            calculationSheet,
            nameofDraweeBank,
            dateOfChallan
        
        } = this.state;

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
                                       

                                    </tbody>
                                </table>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus/>
                                    <PrimaryButton text="Next" allowDisabledFocus/>
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
