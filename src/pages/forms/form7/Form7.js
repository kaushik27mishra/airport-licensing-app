import React, { Component } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, DatePicker, DayOfWeek, mergeStyleSets  } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';

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

const stackTokens = { childrenGap: 20 };

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


export default class Form7 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             check:"",
             challanNo:"",
             challanNo_error: "",
             challanNo_defect: null,
             amount:"",
             amount_error: "",
             amount_defect: null,
             calculationSheet: null,
             nameOfDraweeBank: "",
             nameOfDraweeBank_error: "",
             nameOfDraweeBank_defect: null,
             dateOfDraweeBank: "2020-07-13",
             dateOfDraweeBank_defect:null,
             dateOfDraweeBank_error:"",


        }
    }

    _onChange = (ev, option) => {
        this.setState({check:option.key})
        this.setState({manualEnclosed:option.key})
    }

    onFormatDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
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

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFileChange=(e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
        })
    }
    
    render() {

        const {
             challanNo,
             challanNo_error,
             challanNo_defect,
             amount,
             amount_error,
             amount_defect,
             calculationSheet,
             nameOfDraweeBank,
             nameOfDraweeBank_error,
             nameOfDraweeBank_defect,
             dateOfDraweeBank,
             dateOfDraweeBank_defect,
             dateOfDraweeBank_error,

        } = this.state;
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Details of Fees</Text>
                                <TextField
                                    label="Challan Number for online deposit of Application Fee"
                                    name="challanNo"
                                    onChange={this.handleChange} 
                                    value={challanNo} 
                                    errorMessage={challanNo_error} 
                                    disabled={challanNo_defect}
                                />
                                <TextField
                                    label="Amount"
                                    name="amount"
                                    onChange={this.handleChange} 
                                    value={amount} 
                                    errorMessage={amount_error} 
                                    disabled={amount_defect}
                                />
                                <Text variant={'small'} >Attach a sheet showing the calculation of amount as per runway length</Text>
                                <div class="button-wrap"> {/*to be added in db*/}
                                    <label class ="new-button" for="upload"> Upload File
                                    <input id="upload" name="calculationSheet" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {calculationSheet!=null ? `${calculationSheet.name}` : ''}
                                </div>
                                <TextField
                                    label="Name of the drawee bank"
                                    name="nameOfDraweeBank"
                                    onChange={this.handleChange} 
                                    value={nameOfDraweeBank} 
                                    errorMessage={nameOfDraweeBank_error} 
                                    disabled={nameOfDraweeBank_defect}/>
                                <Text variant='medium'>Select the date on which challan was submitted in the bank</Text>
                                <DatePicker
                                    onSelectDate={(e)=> {this.onDateChange(e,'dateOfDraweeBank')}} 
                                    firstDayOfWeek={DayOfWeek.Sunday}
                                    value={this.onParseDateFromString(dateOfDraweeBank)}
                                    disabled={!(dateOfDraweeBank_defect==null) && !dateOfDraweeBank_defect}
                                    errorMessage={dateOfDraweeBank_error}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a Date."
                                    ariaLabel="Select a Date."
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
