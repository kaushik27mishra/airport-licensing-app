import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
//import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';


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


const options = [
    { key: true, text: 'Yes' },
    { key: false, text: 'No' },
];

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


const stackTokens = { childrenGap: 20 };

export default class Form4 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             owner: true,
        }
    }

    _onChangeowner = (ev, option) => {
        //console.dir(option.key);
        this.setState({owner:option.key})
    }
    
    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                            <ChoiceGroup defaultSelectedKey={true} options={options} onChange={this._onChangeowner} label="Are you the owner of the aerodrome site" required={true} />
                            {
                                this.state.owner===false ? 
                                <>
                                    <TextField label="Please state the details of the
                                     rights you hold over the land" 
                                     placeholder="Please enter details here"
                                     multiline rows={3} /> 
                                     
                                     <Text variant='medium'>The period from which you hold these rights</Text> {/*Needs to be made DateField*/}
                                     <DatePicker
                                        className={controlClass.control}
                                        strings={DayPickerStrings}
                                        placeholder="Select a date..."
                                        ariaLabel="Select a date"
                                    />
                                    <Text variant='medium'>The period to which you hold these rights</Text> {/*Needs to be made DateField*/}
                                     <DatePicker
                                        className={controlClass.control}
                                        strings={DayPickerStrings}
                                        placeholder="Select a date..."
                                        ariaLabel="Select a date"
                                    /> 
                                     <Text variant='medium'>Termination of these rights</Text> {/*Needs to be made DateField*/}
                                     <DatePicker
                                        className={controlClass.control}
                                        strings={DayPickerStrings}
                                        placeholder="Select a date..."
                                        ariaLabel="Select a date"
                                    />
                                </>
                                : null
                            }
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
