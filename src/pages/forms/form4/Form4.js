import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { DatePicker, DayOfWeek, mergeStyleSets } from 'office-ui-fabric-react';


import gql from 'graphql-tag';
import { Mutation, Query } from '@apollo/react-components';
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

export default class Form4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dateApprovalOfOwnerOfLand: "2020-07-13",
            dateApprovalOfOwnerOfLand_defect:null,
            dateApprovalOfOwnerOfLand_error:"",
            dateApprovalOfLocalAuthority: "2020-07-13",
            dateApprovalOfLocalAuthority_defect:null,
            dateApprovalOfLocalAuthority_error:"",
            DefenceFile: null,
            HomeAffairsFile: null,
            OwnerFile: null,
            LocalFile: null,

        
        }
    }

    onFormatDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onDateChange = (date,name) => {
        this.setState({
            [name] : this.onFormatDate(date)
        })
    }

    onParseDateFromString = (val) => {
        if(typeof(val)=='string') {
            var parts = val.split('-');
            return new Date(parts[0], parts[1]-1, parts[2]);
        }
    }
    
    handleFileChange=(e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
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
            DefenceFile,
            HomeAffairsFile,
            OwnerFile,
            LocalFile,

        } = this.state;
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Permissions and Approvals</Text>
                                <Text variant={'medium'} >Attach an application and documents that 
                                are required by the Ministry of Defence</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload"> Upload File
                                    <input id="upload" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {DefenceFile!=null ? `${DefenceFile.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Attach an application and documents that 
                                are required by the Ministry of Home Affairs</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload"> Upload File
                                    <input id="upload" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {HomeAffairsFile!=null ? `${HomeAffairsFile.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Attach attested copy of approval of Owner of Land</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload"> Upload File
                                    <input id="upload" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {OwnerFile!=null ? `${OwnerFile.name}` : ''}
                                </div>

                                <Text 
                                    variant='medium'>
                                        Mention Date of Approval of Owner of Land
                                </Text>
                                <DatePicker
                                    onSelectDate={(e)=> {this.onDateChange(e,'dateApprovalOfOwnerOfLand')}} 
                                    firstDayOfWeek={DayOfWeek.Sunday}
                                    value={this.onParseDateFromString(dateApprovalOfOwnerOfLand)}
                                    disabled={!(dateApprovalOfOwnerOfLand_defect==null) && !dateApprovalOfOwnerOfLand_defect}
                                    errorMessage={dateApprovalOfOwnerOfLand_error}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a date."
                                    ariaLabel="Select a date"
                                />
                                {dateApprovalOfOwnerOfLand_error===''? null : <Text style={{color:'#FF0000',marginTop:'0'}} variant='small'>{dateApprovalOfOwnerOfLand_error}</Text>}
                                <Text 
                                    variant='medium'>
                                        Attach attested copy of approval of Local authority such 
                                        as municipal corporation / committee or urban and development 
                                        Board/ authority of the State or its Country and Town Planning
                                         Department
                                </Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload"> Upload File
                                    <input id="upload" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {LocalFile!=null ? `${LocalFile.name}` : ''}
                                </div>

                                <Text 
                                    variant='medium'>
                                        Mention Date of Approval of Local authority such as municipal 
                                        corporation / committee or urban land development Board/ authority 
                                        of the State or its Country and Town Planning Department
                                </Text>
                                <DatePicker
                                    onSelectDate={(e)=> {this.onDateChange(e,'dateApprovalOfLocalAuthority')}} 
                                    firstDayOfWeek={DayOfWeek.Sunday}
                                    value={this.onParseDateFromString(dateApprovalOfLocalAuthority)}
                                    disabled={!(dateApprovalOfLocalAuthority_defect==null) && !dateApprovalOfLocalAuthority_defect}
                                    errorMessage={dateApprovalOfLocalAuthority_error}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a date."
                                    ariaLabel="Select a date"
                                />
                                {dateApprovalOfLocalAuthority_error===''? null : <Text style={{color:'#FF0000',marginTop:'0'}} variant='small'>{dateApprovalOfLocalAuthority_error}</Text>}
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
