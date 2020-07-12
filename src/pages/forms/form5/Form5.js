import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { DatePicker, mergeStyleSets } from 'office-ui-fabric-react';
import { ActionButton} from 'office-ui-fabric-react';


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


const fileRequestIcon = { iconName: 'Upload' };

const controlClass = mergeStyleSets({
    control: {
      margin: '0 0 15px 0',
      maxWidth: '300px',
    },
  });

const classNames = mergeStyleSets({
    pivot: {
        margin: 'auto',
    }
});

//For Date Field
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

export default class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dateApprovalOfOwnerOfLand: "",
            dateApprovalOfOwnerOfLand_defect:false,
            dateApprovalOfOwnerOfLand_error:"",
            dateApprovalOfLocalAuthority: "",
            dateApprovalOfLocalAuthority_defect:false,
            dateApprovalOfLocalAuthority_error:"",
        
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {

        const {
            dateApprovalOfOwnerOfLand,
            dateApprovalOfOwnerOfLand_defect,
            dateApprovalOfOwnerOfLand_error,
            dateApprovalOfLocalAuthority,
            dateApprovalOfLocalAuthority_defect,
            dateApprovalOfLocalAuthority_error,

        } = this.state;
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Permissions and Approvals</Text>
                                <ActionButton
                                    //State to be added
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach an application and documents that are required by the Ministry of Defence
                                </ActionButton>
                                <ActionButton
                                    //State to be added
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach an application and documents that are required by the Ministry of Home Affairs
                                </ActionButton>
                                <ActionButton
                                    //State to be added
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach attested copy of approval of Owner of Land
                                </ActionButton>
                                <Text 
                                    variant='medium'>
                                        Mention Date of Approval of Owner of Land
                                </Text>
                                <DatePicker
                                    name="dateApprovalOfOwnerOfLand" 
                                    onChange={this.handleChange} 
                                    value={dateApprovalOfOwnerOfLand} 
                                    errorMessage={dateApprovalOfOwnerOfLand_error} 
                                    disabled={dateApprovalOfOwnerOfLand_defect}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a date."
                                    ariaLabel="Select a date"
                                />
                                <ActionButton
                                    //State to be added
                                    iconProps={fileRequestIcon} 
                                    allowDisabledFocus>             
                                 Attach attested copy of approval of Local authority such as municipal corporation / committee or urban
land development Board/ authority of the State or its Country and Town Planning Department
                                </ActionButton>
                                <Text 
                                    variant='medium'>
                                        Mention Date of Approval of Local authority such as municipal corporation / committee or urban
land development Board/ authority of the State or its Country and Town Planning Department
                                </Text>
                                <DatePicker
                                    name="dateApprovalOfLocalAuthority" 
                                    onChange={this.handleChange} 
                                    value={dateApprovalOfLocalAuthority} 
                                    errorMessage={dateApprovalOfLocalAuthority_error} 
                                    disabled={dateApprovalOfLocalAuthority_defect}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a date."
                                    ariaLabel="Select a date"
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
