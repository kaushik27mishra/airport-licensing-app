import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';

//apollo
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';

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
    },
    textFieldStyles: {
        root: {
            width:'100%'
        }
    }
}

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});


const stackTokens = { childrenGap: 20 };

//for Choice Pickers
const options_use = [
    { key: 'Public', text: 'Public Use' },
    { key: 'Private', text: 'Private Use' },
  ];

const options = [
    { key: true, text: 'Yes' },
    { key: false, text: 'No' },
];

export default class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            usage: 'Public',
            onlyYourAircraft : true,
            priorPermissionForOtherAircraft : true,
            allWeatherRequired : false,
            purposeOfPrivate : "",
            purposeOfPrivate_defect : false,
            purposeOfPrivate_error : "",
            detailsOfProposedLighting : "",
            detailsOfProposedLighting_defect: false,
            detailsOfProposedLighting_error: "",
            detailsCNS_ATN : "",
            detailsCNS_ATN_defect: false,
            detailsCNS_ATN_error: "",
            detailsMET_Facilities : "",
            detailsMET_Facilities_defect: false,
            detailsMET_Facilities_error: "",
            otherAviationActivities : "",
            otherAviationActivities_defect: false,
            otherAviationActivities_error: "",
            heaviestAircraftType: "",
            heaviestAircraftType_defect: false,
            heaviestAircraftType_error: "",
            heaviestAircraftLength: "",
            heaviestAircraftLength_defect: false,
            heaviestAircraftLength_error: "",
            heaviestAircraftWeight: "",
            heaviestAircraftWeight_defect: false,
            heaviestAircraftWeight_error: "",
            heaviestAircraftWidth: "",
            heaviestAircraftWidth_defect: false,
            heaviestAircraftWidth_error: "",

        }
    }

    componentDidMount() {
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
                  usage: form2.usage,
                  purposeOfPrivate: form2.purposeOfPrivate.data,
                  purposeOfPrivate_defect: !!form2.purposeOfPrivate.checked,
                  purposeOfPrivate_error: form2.purposeOfPrivate_error,
                  onlyYourAircraft: form2.ownAircraft,
                  priorPermissionForOtherAircraft: form2.priorPermission,
                  allWeatherRequired: form2.allWeatherRequired,
                  detailsOfProposedLighting: form2.lightningPlan.data,
                  detailsOfProposedLighting_defect: !!form2.lightningPlan.checked,
                  detailsOfProposedLighting_error: form2.lightningPlan.suggestion,
                  detailsCNS_ATN: form2.cnsAtm.data,
                  detailsCNS_ATN_defect: !!form2.cnsAtm.checked,
                  detailsCNS_ATN_error: form2.cnsAtm.suggestion,
                  detailsMET_Facilities: form2.metFacilities.data,
                  detailsMET_Facilities_defect: !!form2.metFacilities.checked,
                  detailsMET_Facilities_error: form2.metFacilities.suggestion,
                  otherAviationActivities: form2.aviationActivities.data,
                  otherAviationActivities_defect: !!form2.aviationActivities.checked,
                  otherAviationActivities_error: form2.aviationActivities.suggestion,
                  heaviestAircraftType: form2.heaviestType.data,
                  heaviestAircraftType_defect: form2.heaviestType.checked,
                  heaviestAircraftType_error: form2.heaviestType.suggestion,
                  heaviestAircraftLength: form2.heaviestLength.data,
                  heaviestAircraftLength_defect: form2.heaviestLength.checked,
                  heaviestAircraftLength_error: form2.heaviestLength.error,
                  heaviestWidth: form2.heaviestAircraftWidth.data,
                  heaviestWidth_defect: !!form2.heaviestWidth.checked,
                  heaviestWidth_error: form2.heaviestLength.suggestion,
                  heaviestAircraftWeight: form2.heaviestWidth.data,
                  heaviestAircraftWidth_defect: form2.heaviestWidth.checked,
                  heaviestAircraftWidth_error:  form2.heaviestWidth.suggestion
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

    }

    _onChange = (ev, option) => {
        this.setState({[ev.target.name]:option.key})
    }
    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        const {
        data,
        purposeOfPrivate,
        purposeOfPrivate_defect,
        purposeOfPrivate_error,
        detailsOfProposedLighting,
        detailsOfProposedLighting_defect,
        detailsOfProposedLighting_error,
        detailsCNS_ATN,
        detailsCNS_ATN_defect,
        detailsCNS_ATN_error,
        detailsMET_Facilities,
        detailsMET_Facilities_defect,
        detailsMET_Facilities_error,
        otherAviationActivities,
        otherAviationActivities_defect,
        otherAviationActivities_error,
        heaviestAircraftType,
        heaviestAircraftType_defect,
        heaviestAircraftType_error,
        heaviestAircraftLength,
        heaviestAircraftLength_defect,
        heaviestAircraftLength_error,
        heaviestAircraftWeight,
        heaviestAircraftWeight_defect,
        heaviestAircraftWeight_error,
        heaviestAircraftWidth,
        heaviestAircraftWidth_defect,
        heaviestAircraftWidth_error,
        usage,
        onlyYourAircraft,
        priorPermissionForOtherAircraft,
        allWeatherRequired,} = this.state;

        var MUTATION;
        if(data) {
            MUTATION=FORM2_UPDATE;
        }
        else {
            MUTATION=FORM2;
        }

        return (
            <Mutation mutation={MUTATION}>
                {(form2function, { loading, data_res, error }) => {
            
                if(loading) return 'loading'
                if(error) console.log(error);
                return (
                <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                    <Text variant={'xxLarge'}>Aerodrome Activities</Text>
                
                                    <ChoiceGroup
                                        name="usage"
                                        defaultSelectedKey="Pub"
                                        options={options_use}
                                        onChange={this._onChange}
                                        label="Pick one"
                                        required={true}/>
                                    {
                                        this.state.usage==='Pvt' ?
                                        <>
                                            <TextField
                                                name="purposeOfPrivate"
                                                onChange={this.handleChange}
                                                value={purposeOfPrivate}
                                                errorMessage={purposeOfPrivate_error}
                                                disabled={purposeOfPrivate_defect}
                                                label="Indicate the purpose for which the aerodrome
                                                    will be used e.g. joy rides, air displays, miscellaneous instructional 
                                                    flying, private flying etc."
                                                placeholder="Please enter text here"
                                                multiline rows={3}/>
                                            <ChoiceGroup
                                                name="onlyYourAircraft"
                                                defaultSelectedKey="No"
                                                options={options}
                                                onChange={this._onChange}
                                                label="Whether your own aircraft only will use the aerodrome or do you 
                                                    propose to use the aerodrome by own aircraft as well as other aircraft ?" 
                                                required={true}/>
                                            {
                                                this.state.onlyYourAircraft==='No' ?
                                                    <ChoiceGroup
                                                    name="priorPermissionForOtherAircraft"
                                                    defaultSelectedKey="Yes"
                                                    options={options}
                                                    onChange={this._onChange}
                                                    label="Whether your own aircraft only will use the aerodrome or do you 
                                                        propose to use the aerodrome by own aircraft as well as other aircraft ?" 
                                                    required={true}/>
                                                    : null
                                            }
                                        </>
                                        : null
                                    }
                                    <ChoiceGroup 
                                        name="allWeatherRequired"
                                        defaultSelectedKey="No"
                                        options={options}
                                        onChange={this._onChange}
                                        label="Is a license for NIGHT USE/ ALL WEATHER required?"
                                        required={true}/>
                                    {
                                        this.state.allWeatherRequired==="Yes" ?
                                        <TextField
                                            name="detailsOfProposedLighting"
                                            onChange={this.handleChange}
                                            value={detailsOfProposedLighting}
                                            errorMessage={detailsOfProposedLighting_error}
                                            disabled={detailsOfProposedLighting_defect}
                                            label="Please provide details of proposed lighting
                                                along with lighting plan"
                                            placeholder="Please enter text here"
                                            multiline rows={3}/>
                                        : null
                                    }
                                    <TextField
                                            name="detailsCNS_ATN"
                                            onChange={this.handleChange}
                                            value={detailsCNS_ATN}
                                            errorMessage={detailsCNS_ATN_error}
                                            disabled={detailsCNS_ATN_defect}
                                            label="Please provide details of proposed CNS-ATM facilities"
                                            placeholder="Please enter text here"
                                            multiline rows={3}/>
                                    <TextField
                                            name="detailsMET_Facilities"
                                            onChange={this.handleChange}
                                            value={detailsMET_Facilities}
                                            errorMessage={detailsMET_Facilities_error}
                                            disabled={detailsMET_Facilities_defect}
                                            label="Please provide details of proposed MET facilities"
                                            placeholder="Please enter text here"
                                            multiline rows={3}/>
                                    <TextField
                                            name="otherAviationActivities"
                                            onChange={this.handleChange}
                                            value={otherAviationActivities}
                                            errorMessage={otherAviationActivities_error}
                                            disabled={otherAviationActivities_defect}
                                            label="Please give details of other proposed aviation activities
                                                (for example gliding, parachuting, micro lights)."
                                            placeholder="Please enter text here"
                                            multiline rows={3}/>
                                    <TextField
                                            name="heaviestAircraftType"
                                            onChange={this.handleChange}
                                            value={heaviestAircraftType}
                                            errorMessage={heaviestAircraftType_error}
                                            disabled={heaviestAircraftType_defect}
                                            label="Mention the type of the largest / heaviest aircraft 
                                                for which the aerodrome is designed"
                                            placeholder="Please enter text here"/>
                                    <TextField
                                            name="heaviestAircraftWeight"
                                            onChange={this.handleChange}
                                            value={heaviestAircraftWeight}
                                            errorMessage={heaviestAircraftWeight_error}
                                            disabled={heaviestAircraftWeight_defect}
                                            label="Mention the maximum total weight of the largest / heaviest aircraft 
                                                for which the aerodrome is designed"
                                            placeholder="Please enter text here"/>
                                    <TextField
                                            name="heaviestAircraftLength"
                                            onChange={this.handleChange}
                                            value={heaviestAircraftLength}
                                            errorMessage={heaviestAircraftLength_error}
                                            disabled={heaviestAircraftLength_defect}
                                            label="Mention thr overall length of the largest / heaviest aircraft 
                                                for which the aerodrome is designed"
                                            placeholder="Please enter text here"/>
                                    <TextField
                                            name="heaviestAircraftWidth"
                                            onChange={this.handleChange}
                                            value={heaviestAircraftWidth}
                                            errorMessage={heaviestAircraftWidth_error}
                                            disabled={heaviestAircraftWidth_defect}
                                            label="Mention the maximum fuselage width of the largest / heaviest aircraft 
                                                for which the aerodrome is designed"
                                            placeholder="Please enter text here"/>
                                    <Stack horizontal tokens={stackTokens}>
                                        <DefaultButton text="Back" allowDisabledFocus />
                                        <PrimaryButton 
                                        onClick={ () =>  {
                                          if(data) {
                                            form2function({ variables: {
                                                // saare variables including check and error
                                                usage: usage,
                                                purposeOfPrivate: purposeOfPrivate,
                                                onlyYourAircraft: onlyYourAircraft,
                                                priorPermission: priorPermissionForOtherAircraft, 
                                                allWeatherRequired: allWeatherRequired, 
                                                lightningPlan: detailsOfProposedLighting,
                                                cnsAtm: detailsCNS_ATN,
                                                metFacilities: detailsMET_Facilities,
                                                aviationActivities: otherAviationActivities,
                                                heaviestType: heaviestAircraftType,
                                                heaviestWeight: heaviestAircraftWeight,
                                                heaviestLength: heaviestAircraftLength,
                                                heaviestWidth: heaviestAircraftWidth,
                                                id: this.props.match.params.id, 
                                                // usage: usage,
                                                //,
                                                // onlyYourAircraft: onlyYourAircraft,
                                                // priorPermission: priorPermissionForOtherAircraft,
                                                // allWeatherRequired: allWeatherRequired,
                                               // lightningPlan: detailsOfProposedLighting,
                                               // cnsAtm: detailsCNS_ATN,
                                                //metFacilities: detailsMET_Facilities,
                                                //aviationActivities: otherAviationActivities,
                                                // heaviestType: ,
                                                // heaviestWeight: ,
                                                // heaviestLength: ,
                                                // heaviestWidth: ,
                                              }
                                            })
                                          }
                                          else {
                                            form2function({ variables: {
                                                id: this.props.match.params.id,  
                                                usage: usage,
                                                purposeOfPrivate: purposeOfPrivate,
                                                onlyYourAircraft: onlyYourAircraft,
                                                priorPermission: priorPermissionForOtherAircraft,
                                                allWeatherRequired: allWeatherRequired,
                                                lightningPlan: detailsOfProposedLighting,
                                                cnsAtm: detailsCNS_ATN,
                                                metFacilities: detailsMET_Facilities,
                                                aviationActivities: otherAviationActivities,
                                                heaviestType: heaviestAircraftType,
                                                heaviestWeight: heaviestAircraftWeight,
                                                heaviestLength: heaviestAircraftLength,
                                                heaviestWidth: heaviestAircraftWidth,
                                          }})
                                      }
                                      }}
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
mutation EnterForm2(
    $id: String! 
    $usage: Usage
    $purposeOfPrivate: String
    $onlyYourAircraft: Boolean
    $priorPermission: Boolean
    $allWeatherRequired: Boolean
    $lightningPlan: String
    $cnsAtm: String
    $metFacilities: String
    $aviationActivities: String
    $heaviestType: String
    $heaviestWeight: String
    $heaviestLength: String
    $heaviestWidth: String
  ) {
    enterForm2(
      id: $id
      input: {
        usage: $usage
        purpose: {
          data: $purposeOfPrivate
        }
        ownAircraft: $onlyYourAircraft
        priorPermission: $priorPermission
        allWeatherRequired: $allWeatherRequired
        lightningPlan: {
          data: $lightningPlan
        }
        cnsAtm: {
          data: $cnsAtm
        }
        metFacilities: {
          data: $metFacilities
        }
        aviationActivities: {
          data: $aviationActivities
        }
        heaviestType: {
          data: $heaviestType
        }
        heaviestWeight: {
          data: $heaviestWeight
        }
        heaviestLength: {
          data: $heaviestLength
        }
        heaviestWidth: {
          data: $heaviestWidth
        }
      }
    )
}
`
const FORM2_UPDATE = gql`
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
    $cnsAtm_checked: Boolean
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
    $heaviestWeight_defect: Defect
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
          check: $purposeOfPrivate_defect
          suggestion: purposeOfPrivate_error
        }
        ownAircraft: $onlyYourAircraft
        priorPermission: $priorPermission
        allWeatherRequired: $allWeatherRequired
        lightningPlan: {
          data: $lightningPlan
          check: $lightningPlan_defect
          suggestion: $lightningPlan_error
        }
        cnsAtm: {
          data: $cnsAtm
          check: $cnsAtm_defect
          suggestion: $cnsAtm_error
        }
        metFacilities: {
          data: $metFacilities
          check: $metFacilities_defect
          suggestion: $metFacilities_error
        }
        aviationActivities: {
          data: $aviationActivities
          check: $aviationActivities_defect
          suggestion: $aviationActivities_error
        }
        heaviestType: {
          data: $heaviestType
          check: $heaviestType_defect
          suggestion: $heaviestType_error
        }
        heaviestWeight: {
          data: $heaviestWeight
          check: $heaviestWeight_defect
          suggestion: $heaviestWeight_error
        }
        heaviestLength: {
          data: $heaviestLength
          check: $heaviestLength_defect
          suggestion: $heaviestLength_error
        }
        heaviestWidth: {
          data: $heaviestWidth
          check: $heaviestWidth_defect
          suggestion: $heaviestWidth_error
        }
      }
    )
}
`;
