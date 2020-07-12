import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';


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
    { key: 'Pub', text: 'Public Use' },
    { key: 'Pvt', text: 'Private Use' },
  ];

const options = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
];

export default class Form3 extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             usage: 'Pub',
             onlyYourAircraft : 'Yes',
             priorPermissionForOtherAircraft : 'Yes',
             allWeatherRequired : 'No',
             purposeOfPrivate: "",
             purposeOfPrivate_defect: false,
             purposeOfPrivate_error: "",
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
    _onChange = (ev, option) => {
        this.setState({[ev.target.name]:option.key})
    }
    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Aerodrome Activities</Text>

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
                                            multiline rows={3} /> 
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
                                        multiline rows={3} />
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
                                    <PrimaryButton text="Next" allowDisabledFocus />
                                </Stack>              
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
