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
        }
    }
    _onChangeUse = (ev, option) => {
       // console.dir(option);
        this.setState({usage:option.key})
    }

    _onChangeonlyYourAircraft = (ev, option) => {
      //  console.dir(option);
        this.setState({onlyYourAircraft:option.key})
    }
    _onChangepriorPermissionForOtherAircraft = (ev, option) => {
      //  console.dir(option);
        this.setState({priorPermissionForOtherAircraft:option.key})
    }
    _onChangeallWeatherRequired = (ev, option) => {
     //   console.dir(option);
        this.setState({allWeatherRequired:option.key})
    }

    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Aerodrome Activities</Text>

                                <ChoiceGroup 
                                    defaultSelectedKey="Pub"
                                    options={options_use}
                                    onChange={this._onChangeUse}
                                    label="Pick one"
                                    required={true}/>
                                {  
                                    this.state.usage==='Pvt' ? 
                                    <>
                                        <TextField 
                                            label="Indicate the purpose for which the aerodrome
                                                will be used e.g. joy rides, air displays, miscellaneous instructional 
                                                flying, private flying etc." 
                                            placeholder="Please enter text here"
                                            multiline rows={3} /> 
                                        <ChoiceGroup 
                                            defaultSelectedKey="No" 
                                            options={options} 
                                            onChange={this._onChangeonlyYourAircraft}
                                            label="Whether your own aircraft only will use the aerodrome or do you 
                                                propose to use the aerodrome by own aircraft as well as other aircraft ?" 
                                            required={true}/>
                                        {
                                            this.state.onlyYourAircraft==='No' ?
                                                <ChoiceGroup 
                                                defaultSelectedKey="Yes" 
                                                options={options} 
                                                onChange={this._onChangepriorPermissionForOtherAircraft}
                                                label="Whether your own aircraft only will use the aerodrome or do you 
                                                    propose to use the aerodrome by own aircraft as well as other aircraft ?" 
                                                required={true}/> 
                                                : null
                                        }
                                    </>
                                    : null
                                }
                                <ChoiceGroup defaultSelectedKey="No" 
                                    options={options} 
                                    onChange={this._onChangeallWeatherRequired}
                                    label="Is a license for NIGHT USE/ ALL WEATHER required?" 
                                    required={true}/>
                                {
                                    this.state.allWeatherRequired==="Yes" ?
                                    <TextField label="Please provide details of proposed lighting
                                            along with lighting plan" 
                                        placeholder="Please enter text here"
                                        multiline rows={3} />
                                    : null
                                }
                                <TextField 
                                        label="Please provide details of proposed CNS-ATM facilities" 
                                        placeholder="Please enter text here"
                                        multiline rows={3}/>
                                <TextField 
                                        label="Please provide details of proposed MET facilities" 
                                        placeholder="Please enter text here"
                                        multiline rows={3}/>
                                <TextField 
                                        label="Please give details of other proposed aviation activities
                                            (for example gliding, parachuting, micro lights)." 
                                        placeholder="Please enter text here"
                                        multiline rows={3}/>
                                <TextField 
                                        label="Mention the type of the largest / heaviest aircraft 
                                            for which the aerodrome is designed"
                                        placeholder="Please enter text here"/>
                                <TextField 
                                        label="Mention the maximum total weight of the largest / heaviest aircraft 
                                            for which the aerodrome is designed"
                                        placeholder="Please enter text here"/>
                                <TextField 
                                        label="Mention thr overall length of the largest / heaviest aircraft 
                                            for which the aerodrome is designed"
                                        placeholder="Please enter text here"/>
                                <TextField 
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
