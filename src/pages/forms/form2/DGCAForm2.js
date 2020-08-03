import React, { Component } from 'react'
import Loader from '../../../components/loader/Loader'
//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';
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
            allWeatherRequired: true,
            status: "Submitted",
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form2 {
                    usage
                    purpose {
                      data
                      checked
                      suggestion
                    }
                    ownAircraft
                    priorPermission
                    allWeatherRequired
                    lightningPlan {
                      data
                      checked
                      suggestion
                    }
                    cnsAtm {
                      data
                      checked
                      suggestion
                    }
                    metFacilities {
                      data
                      checked
                      suggestion
                    }
                    aviationActivities {
                      data
                      checked
                      suggestion
                    }
                    heaviestType {
                      data
                      checked
                      suggestion
                    }
                    heaviestLength {
                      data
                      checked
                      suggestion
                    }
                    heaviestWidth {
                      data
                      checked
                      suggestion
                    }
                    heaviestWeight {
                        data
                        checked
                        suggestion
                      }
                  }
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { form2 } = res.data.license;
            if(form2!==null) {
                this.setState({
                    data: true,
                    purpose:{
                        data: form2.purpose.data,
                        suggestion: form2.purpose.suggestion,
                        checked: form2.purpose.checked
                    },
                    lightningPlan:{
                        data: form2.lightningPlan.data,
                        suggestion: form2.lightningPlan.suggestion,
                        checked: form2.lightningPlan.checked
                    },
                    cnsAtm: {
                        data: form2.cnsAtm.data,
                        suggestion: form2.cnsAtm.suggestion,
                        checked: form2.cnsAtm.checked
                    },
                    metFacilities:{
                        data: form2.metFacilities.data,
                        suggestion: form2.metFacilities.suggestion,
                        checked: form2.metFacilities.checked
                    },
                    aviationActivities:{
                        data: form2.aviationActivities.data,
                        suggestion: form2.aviationActivities.suggestion,
                        checked: form2.aviationActivities.checked
                    },
                    heaviestType: {
                        data: form2.heaviestType.data,
                        suggestion: form2.heaviestType.suggestion,
                        checked: form2.heaviestType.checked
                    },
                    heaviestWeight:{
                        data: form2.heaviestWeight.data,
                        suggestion: form2.heaviestWeight.suggestion,
                        checked: form2.heaviestWeight.checked
                    },
                    heaviestLength:{
                        data: form2.heaviestLength.data,
                        suggestion: form2.heaviestLength.suggestion,
                        checked: form2.heaviestLength.checked
                    },
                    heaviestWidth: {
                        data: form2.heaviestWidth.data,
                        suggestion: form2.heaviestWidth.suggestion,
                        checked: form2.heaviestWidth.checked
                    },
                    usage: form2.usage,
                    ownAircraft: form2.ownAircraft,
                    priorPermission: form2.priorPermission,
                    allWeatherRequired: form2.allWeatherRequired,
                    isLoading: false
                    })
            }
            else {
                this.setState({
                    data: false,
                    isLoading: false
                })
            }
        })

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

    statusOptions = [
        { key: 'Submitted', text: 'Submitted',},
        { key: 'Edited', text: 'Edited' },
        { key: 'NotAproved', text: 'Not Approved' },
        { key: 'Approved', text: 'Approved' },
      ];
   
    render() {
        const {
            isLoading,
            data, 
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

        if(isLoading)
            {return <Loader/>}

        if(!data)
            return <h1>Form yet to be filled</h1>

        return (
            <Mutation mutation={FORM2}>
                {(form2function, { loading, data_res, error }) => {
            
                if(loading) {return <Loader/>};
                if(error) console.log(error);
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
                                        onClick={ () =>  {
                                                form2function({ variables: {
                                                    // saare variables including check and error
                                                    id: this.props.match.params.id,
                                                    usage: usage,
                                                    purpose: purpose.data,
                                                    purpose_defect: purpose.checked,
                                                    purpose_error: purpose.suggestion,
                                                    ownAircraft: ownAircraft,
                                                    priorPermission: priorPermission,
                                                    allWeatherRequired: allWeatherRequired,
                                                    lightningPlan: lightningPlan.data,
                                                    lightningPlan_defect: lightningPlan.checked,
                                                    lightningPlan_error: lightningPlan.suggestion,
                                                    cnsAtm: cnsAtm.data,
                                                    cnsAtm_defect: cnsAtm.checked,
                                                    cnsAtm_error: cnsAtm.suggestion,
                                                    metmetFacilities: metFacilities.data,
                                                    metmetFacilities_defect: metFacilities.checked,
                                                    metmetFacilities_error: metFacilities.suggestion,
                                                    aviationActivities: aviationActivities.data,
                                                    aviationActivities_defect: aviationActivities.checked,
                                                    aviationActivities_error: aviationActivities.suggestion,
                                                    heaviestType: heaviestType.data,
                                                    heaviestType_defect: heaviestType.checked,
                                                    heaviestType_error: heaviestType.suggestion,
                                                    heaviestWidth: heaviestWidth.data,
                                                    heaviestWidth_defect: heaviestWidth.checked,
                                                    heaviestWidth_error: heaviestWidth.suggestion,
                                                    heaviestWeight: heaviestWeight.data,
                                                    heaviestWeight_error: heaviestWeight.suggestion,
                                                    heaviestWeight_defect: heaviestWeight.checked,
                                                    heaviestLength: heaviestLength.data,
                                                    heaviestLength_defect: heaviestLength.checked,
                                                    heaviestLength_error: heaviestLength.suggestion
                                                  }
                                                })
                                          
                                            }
                                        }
                                        text="Next" 
                                        allowDisabledFocus />
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>

                )}}
            </Mutation>
        )
    }
}

const FORM2 = gql`
mutation UpdateForm2(
    $id: String!
    $usage: Usage
    $purposeOfPrivate: String
    $purposeOfPrivate_defect: Boolean
    $purposeOfPrivate_error: String
    $onlyYourAircraft: Boolean
    $priorPermission: Boolean
    $allWeatherRequired: Boolean
    $lightningPlan: String
    $lightningPlan_defect: Boolean
    $lightningPlan_error: String
    $cnsAtm: String
    $cnsAtm_defect: Boolean
    $cnsAtm_error: String
    $metFacilities: String
    $metFacilities_defect: Boolean
    $metFacilities_error: String
    $aviationActivities: String
    $aviationActivities_defect: Boolean
    $aviationActivities_error: String
    $heaviestType: String
    $heaviestType_defect: Boolean
    $heaviestType_error: String
    $heaviestWeight: String
    $heaviestWeight_defect: Boolean
    $heaviestWeight_error: String
    $heaviestLength: String
    $heaviestLength_defect: Boolean
    $heaviestLength_error: String
    $heaviestWidth: String
    $heaviestWidth_defect: Boolean
    $heaviestWidth_error: String
  ) {
    updateForm2(
      id: $id
      input: {
        usage: $usage
        purpose: {
          data: $purposeOfPrivate
          checked: $purposeOfPrivate_defect
          suggestion: $purposeOfPrivate_error
        }
        ownAircraft: $onlyYourAircraft
        priorPermission: $priorPermission
        allWeatherRequired: $allWeatherRequired
        lightningPlan: {
          data: $lightningPlan
          checked: $lightningPlan_defect
          suggestion: $lightningPlan_error
        }
        cnsAtm: {
          data: $cnsAtm
          checked: $cnsAtm_defect
          suggestion: $cnsAtm_error
        }
        metFacilities: {
          data: $metFacilities
          checked: $metFacilities_defect
          suggestion: $metFacilities_error
        }
        aviationActivities: {
          data: $aviationActivities
          checked: $aviationActivities_defect
          suggestion: $aviationActivities_error
        }
        heaviestType: {
          data: $heaviestType
          checked: $heaviestType_defect
          suggestion: $heaviestType_error
        }
        heaviestWeight: {
          data: $heaviestWeight
          checked: $heaviestWeight_defect
          suggestion: $heaviestWeight_error
        }
        heaviestLength: {
          data: $heaviestLength
          checked: $heaviestLength_defect
          suggestion: $heaviestLength_error
        }
        heaviestWidth: {
          data: $heaviestWidth
          checked: $heaviestWidth_defect
          suggestion: $heaviestWidth_error
        }
      }
    )
    }
`;
