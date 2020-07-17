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
             check:""
             
        }
    }

    _onChange = (ev, option) => {
        console.dir(option);
        this.setState({check:option.key})
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
                                <Text variant={'xxLarge'} >Aerodrome Management Personnel</Text>

                                <br/>
                                <br/>
                                <Text variant={'large'} >Board Member/ Managing Director or person having specific responsibility for safety.
                                    <em>(To be completed only where the applicant is a company/ corporate/society)</em>
                                </Text>
                                {/*Email phone address to be added in person*/}
                                <TextField 
                                    label="Name"
                                    name="managingDirectorName"
                                    onChange={this.handleChange} 
                                    value={managingDirectorName} 
                                    errorMessage={managingDirectorName_error} 
                                    disabled={managingDirectorName_defect} 
                               />
                                <TextField 
                                    label="E-Mail"
                                    name="managingDirectorEmail"
                                    onChange={this.handleChange} 
                                    value={managingDirectorEmail} 
                                    errorMessage={managingDirectorEmail_error} 
                                    disabled={managingDirectorEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="managingDirectorDesignation"
                                    onChange={this.handleChange} 
                                    value={managingDirectorDesignation} 
                                    errorMessage={managingDirectorDesignation_error} 
                                    disabled={managingDirectorDesignation_defect}
                                />
                                <TextField
                                    label="Telephone Number"
                                    name="managingDirectorTelephone"
                                    onChange={this.handleChange} 
                                    value={managingDirectorTelephone} 
                                    errorMessage={managingDirectorTelephone_error} 
                                    disabled={managingDirectorTelephone_defect}
                                />
                                {/*Email phone address to be added in person*/}
                                <br/>
                                <br/>
                                <Text variant={'large'} >The person in charge of day to day operation of aerodrome.</Text>
                                <TextField
                                    label="Name"
                                    name="dayToDayInchargeName"
                                    onChange={this.handleChange} 
                                    value={dayToDayInchargeName} 
                                    errorMessage={dayToDayInchargeName_error} 
                                    disabled={dayToDayInchargeName_defect}
                                />
                                <TextField
                                    label="E-Mail"
                                    name="dayToDayInchargeEmail"
                                    onChange={this.handleChange} 
                                    value={dayToDayInchargeEmail} 
                                    errorMessage={dayToDayInchargeEmail_error} 
                                    disabled={dayToDayInchargeEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="dayToDayInchargeDesignation"
                                    onChange={this.handleChange} 
                                    value={dayToDayInchargeDesignation} 
                                    errorMessage={dayToDayInchargeDesignation_error} 
                                    disabled={dayToDayInchargeDesignation_defect}
                                />
                                <TextField 
                                    label="Telephone Number"
                                    name="dayToDayInchargeTelephone"
                                    onChange={this.handleChange} 
                                    value={dayToDayInchargeTelephone} 
                                    errorMessage={dayToDayInchargeTelephone_error} 
                                    disabled={dayToDayInchargeTelephone_defect}
                                />    
                                <Text variant={'medium'}><em>Please enclose a current Curriculum Vitae [CV]</em></Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Add CV</em></ActionButton>
                                {/*Email phone address to be added in person*/}
                                <br/>
                                <br/>
                                <Text variant={'large'} >The person responsible for Aerodrome Safety.</Text>{/*Update dynamically */}
                                <TextField
                                    label="Name"
                                    name="aerodromeSafetyName"
                                    onChange={this.handleChange} 
                                    value={aerodromeSafetyName} 
                                    errorMessage={aerodromeSafetyName_error} 
                                    disabled={aerodromeSafetyName_defect}
                                />
                                <TextField
                                    label="E-Mail"
                                    name="aerodromeSafetyEmail"
                                    onChange={this.handleChange} 
                                    value={daerodromeSafetyEmail} 
                                    errorMessage={aerodromeSafetyEmail_error} 
                                    disabled={aerodromeSafetyEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="aerodromeSafetyDesignation"
                                    onChange={this.handleChange} 
                                    value={aerodromeSafetyDesignation} 
                                    errorMessage={aerodromeSafetyDesignation_error} 
                                    disabled={aerodromeSafetyDesignation_defect}
                                />
                                <TextField 
                                    label="Telephone Number"
                                    name="aerodromeSafetyTelephone"
                                    onChange={this.handleChange} 
                                    value={aerodromeSafetyTelephone} 
                                    errorMessage={aerodromeSafetyTelephone_error} 
                                    disabled={aerodromeSafetyTelephone_defect}
                                /> 
                                <ChoiceGroup
                                    defaultSelectedKey="No"
                                    options={options}
                                    onChange={this._onChange}
                                    label="Is the person responsible for Aerodrome Safety, different from 
                                    person in charge of day to day operation of aerodrome."
                                    required={true}
                                />
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
                                <TextField
                                    label="Name"
                                    name="providerCNSATMName"
                                    onChange={this.handleChange} 
                                    value={providerCNSATMName} 
                                    errorMessage={providerCNSATMName_error} 
                                    disabled={providerCNSATMName_defect}
                                />
                                <TextField
                                    label="E-Mail"
                                    name="providerCNSATMEmail"
                                    onChange={this.handleChange} 
                                    value={providerCNSATMEmail} 
                                    errorMessage={providerCNSATMEmail_error} 
                                    disabled={providerCNSATMEmail_defect}
                                />
                                <TextField label="Address" /> {/*Address Field*/}
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >Provider of the MET services</Text>
                                <TextField
                                    label="Name"
                                    name="providerMETName"
                                    onChange={this.handleChange} 
                                    value={providerMETName} 
                                    errorMessage={providerMETName_error} 
                                    disabled={providerMETName_defect}
                                />
                                <TextField
                                    label="E-Mail"
                                    name="providerMETEmail"
                                    onChange={this.handleChange} 
                                    value={providerMETEmail} 
                                    errorMessage={providerMETEmail_error} 
                                    disabled={providerMETEmail_defect}
                                />
                                <TextField label="Address" />   {/*Address Field*/}
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of the Air Traffic Management</Text>
                                <TextField 
                                    label="Name"
                                    name="dayToDayATMName"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMName} 
                                    errorMessage={dayToDayATMName_error} 
                                    disabled={dayToDayATMName_defect} 
                               />
                                <TextField 
                                    label="E-Mail"
                                    name="dayToDayATMEmail"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMEmail} 
                                    errorMessage={dayToDayATMEmail_error} 
                                    disabled={dayToDayATMEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="dayToDayATMDesignation"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMDesignation} 
                                    errorMessage={dayToDayATMDesignation_error} 
                                    disabled={dayToDayATMDesignation_defect}
                                />
                                <TextField
                                    label="Telephone Number"
                                    name="dayToDayATMTelephone"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMTelephone} 
                                    errorMessage={dayToDayATMTelephone_error} 
                                    disabled={dayToDayATMTelephone_defect}
                                />
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of CNS</Text>
                                <TextField 
                                    label="Name"
                                    name="dayToDayCNSName"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMName} 
                                    errorMessage={dayToDayATMName_error} 
                                    disabled={dayToDayATMName_defect} 
                               />
                                <TextField 
                                    label="E-Mail"
                                    name="dayToDayCNSEmail"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMEmail} 
                                    errorMessage={dayToDayATMEmail_error} 
                                    disabled={dayToDayATMEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="dayToDayCNSDesignation"
                                    onChange={this.handleChange} 
                                    value={dayToDayATMDesignation} 
                                    errorMessage={dayToDayATMDesignation_error} 
                                    disabled={dayToDayATMDesignation_defect}
                                />
                                <TextField
                                    label="Telephone Number"
                                    name="dayToDayCNSTelephone"
                                    onChange={this.handleChange} 
                                    value={dayToDayCNSTelephone} 
                                    errorMessage={dayToDayCNSTelephone_error} 
                                    disabled={dayToDayCNSTelephone_defect}
                                />
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of RFF</Text>
                                <TextField 
                                    label="Name"
                                    name="dayToDayRFFName"
                                    onChange={this.handleChange} 
                                    value={dayToDayRFFName} 
                                    errorMessage={dayToDayRFFName_error} 
                                    disabled={dayToDayRFFName_defect} 
                               />
                                <TextField 
                                    label="E-Mail"
                                    name="dayToDayRFFEmail"
                                    onChange={this.handleChange} 
                                    value={dayToDayRFFEmail} 
                                    errorMessage={dayToDayRFFEmail_error} 
                                    disabled={dayToDayRFFEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="dayToDayRFFDesignation"
                                    onChange={this.handleChange} 
                                    value={dayToDayRFFDesignation} 
                                    errorMessage={dayToDayRFFDesignation_error} 
                                    disabled={dayToDayRFFDesignation_defect}
                                />
                                <TextField
                                    label="Telephone Number"
                                    name="dayToDayRFFTelephone"
                                    onChange={this.handleChange} 
                                    value={dayToDayRFFTelephone} 
                                    errorMessage={dayToDayRFFTelephone_error} 
                                    disabled={dayToDayRFFTelephone_defect}
                                />
                                <br/>
                                <br/>
                                {/*Email phone address to be added in person*/}
                                <Text variant={'large'} >The person responsible for overseeing the day to day provisions of MET services</Text>
                                <TextField 
                                    label="Name"
                                    name="dayToDayMETName"
                                    onChange={this.handleChange} 
                                    value={dayToDayMETName} 
                                    errorMessage={dayToDayMETName_error} 
                                    disabled={dayToDayMETName_defect} 
                               />
                                <TextField 
                                    label="E-Mail"
                                    name="dayToDayMETEmail"
                                    onChange={this.handleChange} 
                                    value={dayToDayMETEmail} 
                                    errorMessage={dayToDayMETEmail_error} 
                                    disabled={dayToDayMETEmail_defect}
                                />
                                <TextField
                                    label="Status/Designation"
                                    name="dayToDayMETDesignation"
                                    onChange={this.handleChange} 
                                    value={dayToDayMETDesignation} 
                                    errorMessage={dayToDayMETDesignation_error} 
                                    disabled={dayToDayMETDesignation_defect}
                                />
                                <TextField
                                    label="Telephone Number"
                                    name="dayToDayMETTelephone"
                                    onChange={this.handleChange} 
                                    value={dayToDayMETTelephone} 
                                    errorMessage={dayToDayMETTelephone_error} 
                                    disabled={dayToDayMETTelephone_defect}
                                />
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