import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';

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
            terminationPeriod: "20-10-2120"
        }
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

    


    render() {
        const { rightsIfNotOver,
        owner,
        startPeriod,
        endPeriod,
        terminationPeriod } = this.state;

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
