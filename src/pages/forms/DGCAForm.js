import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../components/form/DGCAChecklist';

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
            fullName:{
                data:"Abdkjabd",
                suggestion:"",
                checked:false
            },
            Surname:{
                data:"Abdkjabd",
                suggestion:"",
                checked:false
            },
            elevationMeter: {
                data:"100ft",
                suggestion:"",
                checked:false
            }
        }
    }

    handleFullNameValueChange = (e) => {
        this.setState({
            fullName : {
                ...this.state.fullName,
                suggestion: e.target.value,
            }
        })
    }

    handleFullNameCheckboxChange = (e,checked) => {
        this.setState({
            fullName : {
                ...this.state.fullName,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleSurNameValueChange = (e) => {
        this.setState({
            Surname : {
                ...this.state.Surname,
                suggestion : e.target.value,
            }
        })
    }

    handleSurNameCheckboxChange = (e,checked) => {
        this.setState({
            Surname : {
                ...this.state.Surname,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleElevationMeterCheckboxChange = (e,checked) => {
        this.setState({
            elevationMeter : {
                ...this.state.elevationMeter,
                suggestion:"",
                checked: !!checked
            }
        })
    }


    handleElevationMeterValueChange = (e,checked) => {
        this.setState({
            elevationMeter : {
                ...this.state.elevationMeter,
                suggestion : e.target.value,
            }
        })
    }


    render() {
        const { fullName, Surname, elevationMeter } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>DGCA Sample form</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <DGCAChecklist 
                                            field="Full Name" 
                                            value={fullName} 
                                            handleChange={this.handleFullNameValueChange} 
                                            onChange={this.handleFullNameCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Surname" 
                                            value={Surname} 
                                            handleChange={this.handleSurNameValueChange} 
                                            onChange={this.handleSurNameCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Elevation of the Aerodrome reference point (AMSL)" 
                                            value={elevationMeter} 
                                            handleChange={this.handleElevationMeterValueChange} 
                                            onChange={this.handleElevationMeterCheckboxChange}
                                        />
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
