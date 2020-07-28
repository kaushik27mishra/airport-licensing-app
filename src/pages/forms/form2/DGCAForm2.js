import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';

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
            purpose:{
                data:"jknvdnn",
                suggestion:"",
                checked:false
            },
            lightningPlan:{
                data:"lightningPlan",
                suggestion:"",
                checked:false
            },
            cnsAtm: {
                data:"cnsAtm",
                suggestion:"",
                checked:false
            },
            metFacilities:{
                data:"metFacilities",
                suggestion:"",
                checked:false
            },
            aviationActivities:{
                data:"aviationActivities",
                suggestion:"",
                checked:false
            },
            heaviestType: {
                data:"heaviestType",
                suggestion:"",
                checked:false
            },
            heaviestWeight:{
                data:"heaviestWeight",
                suggestion:"",
                checked:false
            },
            heaviestLength:{
                data:"lightningPlan",
                suggestion:"",
                checked:false
            },
            heaviestWidth: {
                data:"cnsAtm",
                suggestion:"",
                checked:false
            },
            usage: "Public",
            ownAircraft: true,
            priorPermission: true,
            allWeatherRequired: true

        }
    }

    handlePurposeValueChange = (e) => {
        this.setState({
            purpose : {
                ...this.state.purpose,
                suggestion: e.target.value,
            }
        })
    }

    handlePurposeCheckboxChange = (e,checked) => {
        this.setState({
            purpose : {
                ...this.state.purpose,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleLightningPlanValueChange = (e) => {
        this.setState({
            lightningPlan : {
                ...this.state.lightningPlan,
                suggestion : e.target.value,
            }
        })
    }

    handleLightningPlanCheckboxChange = (e,checked) => {
        this.setState({
            lightningPlan : {
                ...this.state.lightningPlan,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleCNSAtmValueChange = (e,checked) => {
        this.setState({
            cnsAtm : {
                ...this.state.elevationMeter,
                suggestion : e.target.value,
            }
        })
    }

    handleCNSAtmCheckboxChange = (e,checked) => {
        this.setState({
            cnsAtm : {
                ...this.state.cnsAtm,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleMETFacilitiesValueChange = (e,checked) => {
        this.setState({
            metFacilities : {
                ...this.state.metFacilities,
                suggestion : e.target.value,
            }
        })
    }
    
    handleMETFacilitiesCheckboxChange = (e,checked) => {
        this.setState({
            metFacilities : {
                ...this.state.metFacilities,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleAviationActivitiesValueChange = (e) => {
        this.setState({
            aviationActivities : {
                ...this.state.aviationActivities,
                suggestion : e.target.value,
            }
        })
    }

    handleAviationActivitiesCheckboxChange = (e,checked) => {
        this.setState({
            aviationActivities : {
                ...this.state.aviationActivities,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleHeaviestTypeValueChange = (e,checked) => {
        this.setState({
            heaviestType : {
                ...this.state.heaviestType,
                suggestion : e.target.value,
            }
        })
    }

    handleHeaviestTypeCheckboxChange = (e,checked) => {
        this.setState({
            heaviestType : {
                ...this.state.heaviestType,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleHeaviestWeightValueChange = (e) => {
        this.setState({
            heaviestWeight : {
                ...this.state.heaviestWeight,
                suggestion: e.target.value,
            }
        })
    }

    handleHeaviestWeightCheckboxChange = (e,checked) => {
        this.setState({
            heaviestWeight : {
                ...this.state.heaviestWeight,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleHeaviestLengthValueChange = (e) => {
        this.setState({
            heaviestLength : {
                ...this.state.heaviestLength,
                suggestion : e.target.value,
            }
        })
    }

    handleHeaviestLengthCheckboxChange = (e,checked) => {
        this.setState({
            heaviestLength : {
                ...this.state.heaviestLength,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleHeaviestWidthValueChange = (e,checked) => {
        this.setState({
            heaviestWidth : {
                ...this.state.heaviestWidth,
                suggestion : e.target.value,
            }
        })
    }

    handleHeaviestWidthCheckboxChange = (e,checked) => {
        this.setState({
            heaviestWidth : {
                ...this.state.heaviestWidth,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    render() {
        const { 
            purpose,
            lightningPlan,
            cnsAtm, 
            metFacilities,
            aviationActivities,
            heaviestType, 
            heaviestWeight,
            heaviestLength,
            heaviestWidth,
            usage,
            ownAircraft,
            priorPermission,
            allWeatherRequired
        } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Aerodrome Activities</Text>
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
                                                <Text variant={'large'}>Category of licence required as 
                                                defined in Aircraft Rules 1937?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{usage}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <DGCAChecklist 
                                            field="Indicate
                                            the purpose for which the aerodrome
                                            will be used" 
                                            value={purpose} 
                                            handleChange={this.handlePurposeValueChange} 
                                            onChange={this.handlePurposeCheckboxChange}
                                        />
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Whether your own aircraft only will 
                                                use the aerodrome or do you propose to use the aerodrome by 
                                                own aircraft as well as other aircraft ?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{ownAircraft===true?'Yes':'No'}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>If use by others aircraft, state 
                                                whether prior permission or notice is required.</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{priorPermission===true?'Yes':'No'}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Is a license for NIGHT USE/ ALL 
                                                WEATHER required?</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{allWeatherRequired===true?'Yes':'No'}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <DGCAChecklist 
                                            field="Please provide details of proposed lighting
                                            along with the lighting plan." 
                                            value={lightningPlan} 
                                            handleChange={this.handleLightningPlanValueChange} 
                                            onChange={this.handleLightningPlanCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Please provide details of proposed CNS-ATM facilities." 
                                            value={cnsAtm} 
                                            handleChange={this.handleCNSAtmValueChange} 
                                            onChange={this.handleCNSAtmCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Please provide details of proposed MET facilities" 
                                            value={metFacilities} 
                                            handleChange={this.handleMETFacilitiesValueChange} 
                                            onChange={this.handleMETFacilitiesCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Please give details of other proposed aviation activities" 
                                            value={aviationActivities} 
                                            handleChange={this.handleAviationActivitiesValueChange} 
                                            onChange={this.handleAviationActivitiesCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Heaviest Type of aircraft for which the
                                            aerodrome is designed" 
                                            value={heaviestType} 
                                            handleChange={this.handleHeaviestTypeValueChange} 
                                            onChange={this.handleHeaviestTypeCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Heaviest Weight of aircraft for which the
                                            aerodrome is designed" 
                                            value={heaviestWeight} 
                                            handleChange={this.handleHeaviestWeightValueChange} 
                                            onChange={this.handleHeaviestWeightCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Heaviest Length of aircraft for which the
                                            aerodrome is designed" 
                                            value={heaviestLength} 
                                            handleChange={this.handleHeaviestLengthValueChange} 
                                            onChange={this.handleHeaviestLengthCheckboxChange}
                                        />
                                        <DGCAChecklist 
                                            field="Heaviest Width of aircraft for which the
                                            aerodrome is designed" 
                                            value={heaviestWidth} 
                                            handleChange={this.handleHeaviestWidthValueChange} 
                                            onChange={this.handleHeaviestWidthCheckboxChange}
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
