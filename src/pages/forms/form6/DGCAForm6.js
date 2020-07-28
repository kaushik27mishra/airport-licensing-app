import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

//style
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
            manual:{
                data: null,
                suggestion:"",
                checked:false
            },
            enclosed: true,
            indicateDGCA: "soon"

        }
    }

    handleManualValueChange = (e) => {
        this.setState({
            manual: {
                ...this.state.manual,
                suggestion: e.target.value,
            }
        })
    }

    handleManualCheckboxChange = (e,checked) => {
        this.setState({
            manual : {
                ...this.state.manual,
                suggestion:"",
                checked: !!checked
            }
        })
    }


    render() {
        const { indicateDGCA, enclosed, manual } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>AERODROME MANUAL</Text>
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
                                                <Text variant={'large'}>Is an Aerodrome Manual enclosed with this application?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{enclosed===true?'Yes':'No'}</em> {/* Fix spelling in db*/}
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Aerodrome Manual</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get" action={manual}>
                                                        <button type="submit">Download Manual</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                <Checkbox checked={manual.checked} 
                                                    onChange={this.handleManualCheckboxChange} />
                                            </td>
                                            <td>
                                                <TextField 
                                                    name="suggestion"
                                                    onChange={this.handleManualValueChange}
                                                    value={manual.suggestion}
                                                    disabled={!manual.checked}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>If no, when this is likely to be submitted to DGCA.</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}><em>{indicateDGCA}</em></Text>
                                            </td>
                                        </tr>
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
