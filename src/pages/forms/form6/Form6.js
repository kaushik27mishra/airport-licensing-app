import React, { Component, Fragment } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup, ActionButton } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
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

//const fileRequestIcon = { iconName: 'Upload' };
const addIcon = { iconName: 'Add' };

const stackTokens = { childrenGap: 20 };

const options = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
];

class Form6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chech:""
        }
    }

    _onChange = (ev, option) => {
        console.dir(option);
        this.setState({check:option.key})
    }
    
    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Aerodrome Management Personnel</Text>

                                <br/>
                                <br/>
                                <Text variant={'large'} >Board Member/ Managing Director or person having specific responsibility for safety.
                                    <em>(To be completed only where the applicant is a company/ corporate/society)</em>
                                </Text>
                                {/*Email phone address to be added in person*/}
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
                                {/*Email phone address to be added in person*/}
                                <br/>
                                <br/>
                                <Text variant={'large'} >The person in charge of day to day operation of aerodrome.</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>    
                                <Text variant={'medium'}><em>Please enclose a current Curriculum Vitae [CV]</em></Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Add CV</em></ActionButton>
                                {/*Email phone address to be added in person*/}
                                <br/>
                                <br/>
                                <Text variant={'large'} >The person responsible for Aerodrome Safety.</Text>{/*Update dynamically */}
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
                                <ChoiceGroup defaultSelectedKey="No" options={options} onChange={this._onChange} label="Is the person responsible for Aerodrome Safety, different from person in charge of day to day operation of aerodrome." required={true} />
                                {
                                    this.state.check==="Yes" ? 
                                    <Fragment>
                                        <Text variant={'medium'}>
                                            <em>Please enclose a current Curriculum Vitae [CV]</em>
                                        </Text> 
                                        <ActionButton //to be added in db
                                            iconProps={addIcon} allowDisabledFocus><em>Add CV</em>
                                        </ActionButton>
                                    </Fragment> : null
                                }
                                
                                {/*Email phone address to be added in person*/}
                                <br/>
                                <br/>
                                <Text variant={'large'} >Provider of the CNS - ATM</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Address" />
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >Provider of the MET services</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Address" />
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of the Air Traffic Management</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of CNS</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of RFF</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of MET services</Text>
                                <TextField label="Name" />
                                <TextField label="E-Mail" />
                                <TextField label="Status/Designation" />
                                <TextField label="Telephone Number"/>
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

export default Form6;