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
             
        }
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
                                    label="Place name by which the aerodrome 
                                        is to be known in all future references"/>
                                <Dropdown
                                    placeholder="Select a name"
                                    label="Select name of aerodrome owner"
                                    options={options}
                                    styles={dropdownStyles}
                                />
                                {/*Fax number to be added to Person, and this dropdown needs to be connected to Person*/}
                                
                                <TextField 
                                    label="Situation of the aerodrome site with 
                                        reference to the nearest airport, railway 
                                        station and town/village" 
                                    multiline rows={3}/>
                                <TextField label="State/District which situated"/> {/*To be added in db*/}
                                <TextField 
                                    label="Grid Reference in WGS 84" 
                                    multiline rows={3}/>

                                <ActionButton   // To be added in db
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach a survey map, scale1:10,000 showing by means of broken line 
                                 the exact boundaries of the aerodrome.
                                </ActionButton>
                                <TextField label="Elevation of the Aerodrome reference point (AMSL) in feet"/>
                                <TextField label="Elevation of the Aerodrome reference point (AMSL) in metres"/>

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
