// work in progress
import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton  } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ActionButton} from 'office-ui-fabric-react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

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

const dropdownStyles = {
    dropdown: { width: 300 },
  };

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

const fileRequestIcon = { iconName: 'Upload' };
const addIcon = { iconName: 'Add' };

const stackTokens = { childrenGap: 20 };

//For aerodrome owner
const options = [
    { key: 1234, text: 'Theresa' },
    { key: 5678, text: 'Stefan' },

  ];

class Form2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            placeName="",
            placeName_defect=false,
            placeName_error="",
            owner="",
            owner_defect=false,
            owner_error="",
            situation="",
            situation_defect=false,
            situation_error="",
            statedistrict="",
            statedistrict_defect=false,
            statedistrict_error="",
            grid="",
            grid_defect=false,
            grid_error="",
            elevationFeet="",
            elevationFeet_defect=false,
            elevationMeter="",
            elevationMeter_defect=false,
            elevationFeet_error="",
        }
    }
    
    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChangeDropdown = (e) => {
        this.setState({
            [e.target.name]:options.text
        })
    }

    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>
                                    Details of aerodrome<em>(as required to be shown on the licence)</em>
                                </Text>
                                <TextField
                                    name="placeName" 
                                    onChange={this.handleChange} 
                                    value={placeName} 
                                    errorMessage={placeName_error} 
                                    disabled={placeName_defect}
                                    label="Place name by which the aerodrome 
                                        is to be known in all future references"/>
                                <Dropdown
                                    name="owner" 
                                    onChange={this.handleChangeDropdown} 
                                    value={owner} 
                                    errorMessage={owner_error}
                                    disabled={owner_defect}
                                    placeholder="Select a name"
                                    label="Select name of aerodrome owner"
                                    options={options}
                                    styles={dropdownStyles}
                                />
                                {/*Fax number to be added to Person, and this dropdown needs to be connected to Person*/}
                                
                                <TextField
                                    name="situation" 
                                    onChange={this.handleChange} 
                                    value={situation} 
                                    errorMessage={situation_error} 
                                    disabled={situation_defect}
                                    label="Situation of the aerodrome site with 
                                        reference to the nearest airport, railway 
                                        station and town/village" 
                                    multiline rows={3}/>
                                <TextField
                                    name="statedistrict" 
                                    onChange={this.handleChange} 
                                    value={statedistrict} 
                                    errorMessage={statedistrict_error} 
                                    disabled={statedistrict_defect}
                                    label="State/District which situated"/> {/*To be added in db*/}
                                <TextField
                                    name="grid" 
                                    onChange={this.handleChange} 
                                    value={grid} 
                                    errorMessage={grid_error} 
                                    disabled={grid_defect}
                                    label="Grid Reference in WGS 84" 
                                    multiline rows={3}/>

                                <ActionButton   // To be added in db
                                    //State to be added
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach a survey map, scale1:10,000 showing by means of broken line 
                                 the exact boundaries of the aerodrome.
                                </ActionButton>
                                <TextField 
                                    name="elevationFeet" 
                                    onChange={this.handleChange} 
                                    value={elevationFeet} 
                                    errorMessage={elevationFeet_error} 
                                    disabled={elevationFeet_defect}
                                    label="Elevation of the Aerodrome reference point (AMSL) in feet"/>
                                <TextField
                                    name="elevationMeter" 
                                    onChange={this.handleChange} 
                                    value={elevationMeter} 
                                    errorMessage={elevationMeter_error} 
                                    disabled={elevationMeter_defect}
                                    label="Elevation of the Aerodrome reference point (AMSL) in metres"/>

                                <Text 
                                    variant={'medium'}>
                                        Enter Details about <strong>runway(s)</strong>
                                </Text>
                                <ActionButton   // Need to add information for multiple runway(s) in db
                                    iconProps={addIcon} 
                                    allowDisabledFocus
                                    // This onCLick listener isn't working as expected
                                    onClick={() => (
                                        <>
                                            <TextField label="Length of runway in metres" required/> 
                                            <TextField label="Length of runway in metres" required/> 
                                            <TextField label="Orientation of runway" required/>
                                        </>
                                    )}>             
                                 Click for more runway(s).
                                </ActionButton> 
                                {/*need to add length and feet in db while having one Orientation*/}
                                <TextField label="Length of runway in metres" required/> 
                                <TextField label="Length of runway in metres" required/> 
                                <TextField label="Orientation of runway" required/>
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

export default Form2;
