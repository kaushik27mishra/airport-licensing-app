import React, { Component } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup, ActionButton,DatePicker } from 'office-ui-fabric-react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import Form8 from '../form8/Form8';

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

const controlClass = mergeStyleSets({
    control: {
      margin: '0 0 15px 0',
      maxWidth: '300px',
    },
  });


const addIcon = { iconName: 'Add' };
const stackTokens = { childrenGap: 20 };

const options = [
    {key:true},
    {key:false}
]
    

const DayPickerStrings = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  
    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker',
  };



export default class RenewalForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isChecked:false
        }
    }

    _onChangeCheckbox = (ev, option) => {
        var ans=this.state.isChecked
        this.setState({isChecked: !ans})
    }
    
    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Application for Renewal of Aerodrome License</Text>
                                <TextField label="Aerodrome License Number" />
                                <TextField label="Name of the Aerodrome" />
                                <Text variant={'medium'} >Enclose the aerodrome license in original</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Enclose copy of last self-inspection report</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload </em></ActionButton>

                                <Text variant={'medium'} >Enclose copy of latest Nav-aids Calibration report</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Enclose the copy of latest friction test report along with corrective action taken (if any)</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Enclose the copy of updated Aerodrome Manual</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Enclose the training records of all the operational staff (Carried out during the currency of aerodrome license along with annual training plan.)</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Status of Change Management ( use separate sheet for each project to include DGCA approval number,progress status with respect to approved timelines, delay, review of Hazlog as accepted etc.)</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Status of Temporary Exemptions and review report of mitigation measures</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>

                                <Text variant={'medium'} >Status of Permanent exemption with respect to employed mitigation measures.</Text>
                                <ActionButton iconProps={addIcon} allowDisabledFocus><em>Upload</em></ActionButton>
                                
                                <TextField label="Challan Number for online deposit of Renewal Fee" />
                                <TextField label="Amount" />
                                {/*<ActionButton iconProps={addIcon} allowDisabledFocus>Attach a sheet showing the calculation of amount as per runway length</ActionButton>*/}
                                <TextField label="Name of the drawee bank" />
                                <Text variant='medium'>Select the date on which challan was submitted in the bank</Text>
                                <DatePicker
                                className={controlClass.control}
                                strings={DayPickerStrings}
                                placeholder="Select a Date."
                                ariaLabel="Select a Date."/>
                                <Checkbox 
                                    checked={this.state.isChecked} 
                                    onChange={this._onChangeCheckbox} 
                                    defaultChecked={false}
                                    label="It is certified that no change in the physical characteristics of the aerodrome
                                    including the erection of new buildings and alterations to the existing buildings or to
                                    visual aids at the aerodrome have been made without prior approval of the DGCA since
                                    the issue/ last renewal and approved changes in the aerodrome facilities have been duly
                                    incorporated in the Aerodrome Manual wherever necessary." />
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Cancel" allowDisabledFocus />
                                    <PrimaryButton text="Apply" allowDisabledFocus disabled={!this.state.isChecked} />
                                </Stack>
                                <Text variant={'small'}><strong>Note Rejected:</strong></Text>
                                <Text variant={'small'}>1.Application not completed in all respect and not accompanied with relevant enclosures is likely to be.</Text>
                                <Text variant={'small'}>2.The application shall be signed by the owner of the company. In case of any other person authorized by the owner, authorization should be attached with the application.</Text>
                                <Text variant={'small'}>3. It is an offence to make any false representation with the intent to deceive, for the purpose of procuring the grant of an aerodrome licence.</Text>
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
