import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
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



export default class RenewalForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isChecked:false,
             aerodromeLicenseNumber: "",
             aerodromeLicenseNumber_defect: null,
             aerodromeLicenseNumber_error: "",
             aerodromeName: "",
             aerodromeName_defect: null,
             aerodromeName_error: "",
             aerodromeLicense: null,
             selfInspectionReport: null,
             navCalibrationReport: null,
             frictionTestReport: null,
             updatedAerodromeManual: null,
             trainingRecord: null,
             changeManagementStatus: null,
             temporaryExemptionReview: null,
             permanentExemptionReview: null,
             challan: "",
             challanNumber_defect: null,
             challanNumber_error: "",
             amount: "",
             amount_defect: null,
             amount_error: "",
             nameDraweeBank: "",
             nameDraweeBank_defect: null,
             nameDraweeBank_error: "",
             dateChallanSubmission: "2020-01-20",
             dateChallanSubmission_defect: null,
             dateChallanSubmission_error: "",
        }
    }

    _onChangeCheckbox = (ev, option) => {
        var ans=this.state.isChecked
        this.setState({isChecked: !ans})
    }

    handleFileChange=(e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
        })
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
    
    render() {

        const {
            aerodromeLicenseNumber,
             aerodromeLicenseNumber_defect,
             aerodromeLicenseNumber_error,
             aerodromeName,
             aerodromeName_defect,
             aerodromeName_error,
             aerodromeLicense,
             selfInspectionReport,
             navCalibrationReport,
             frictionTestReport,
             updatedAerodromeManual,
             trainingRecord,
             changeManagementStatus,
             temporaryExemptionReview,
             permanentExemptionReview,
             challanNumber,
             challanNumber_defect,
             challanNumber_error,
             amount,
             amount_defect,
             amount_error,
             nameDraweeBank,
             nameDraweeBank_defect,
             nameDraweeBank_error,
             dateChallanSubmission,
             dateChallanSubmission_defect,
             dateChallanSubmission_error,
        } = this.state;
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Application for Renewal of Aerodrome License</Text>
                                <TextField 
                                    label="Aerodrome License Number"
                                    name="aerodromeLicenseNumber"
                                    onChange={this.handleChange} 
                                    value={aerodromeLicenseNumber} 
                                    errorMessage={aerodromeLicenseNumber_error} 
                                    disabled={aerodromeLicenseNumber_defect}
                                />
                                <TextField label="Name of the Aerodrome"
                                    name="aerodromeName"
                                    onChange={this.handleChange} 
                                    value={aerodromeName} 
                                    errorMessage={aerodromeName_error} 
                                    disabled={aerodromeName_defect}
                                />
                                <Text variant={'medium'} >Enclose the aerodrome license in original</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload1"> Upload File
                                        <input id="upload1" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {aerodromeLicense!=null ? `${aerodromeLicense.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Enclose copy of last self-inspection report</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload2"> Upload File
                                        <input id="upload2" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {selfInspectionReport!=null ? `${selfInspectionReport.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Enclose copy of latest Nav-aids Calibration report</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload3"> Upload File
                                        <input id="upload3" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {navCalibrationReport!=null ? `${navCalibrationReport.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Enclose the copy of latest friction test report along with corrective action taken (if any)</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload4"> Upload File
                                        <input id="upload4" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {frictionTestReport!=null ? `${frictionTestReport.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Enclose the copy of updated Aerodrome Manual</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload5"> Upload File
                                        <input id="upload5" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {updatedAerodromeManual!=null ? `${updatedAerodromeManual.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Enclose the training records of all the operational staff (Carried out during the currency of aerodrome license along with annual training plan.)</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload6"> Upload File
                                        <input id="upload6" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {trainingRecord!=null ? `${trainingRecord.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Status of Change Management ( use separate sheet for each project to include DGCA approval number,progress status with respect to approved timelines, delay, review of Hazlog as accepted etc.)</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload7"> Upload File
                                        <input id="upload7" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {changeManagementStatus!=null ? `${changeManagementStatus.name}` : ''}
                                </div>

                                <Text variant={'medium'} >Status of Temporary Exemptions and review report of mitigation measures</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload8"> Upload File
                                        <input id="upload8" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {temporaryExemptionReview!=null ? `${temporaryExemptionReview.name}` : ''}
                                </div>
                                <Text variant={'medium'} >Status of Permanent exemption with respect to employed mitigation measures.</Text>
                                <div class="button-wrap">
                                    <label class ="new-button" for="upload9"> Upload File
                                        <input id="upload9" name="grid" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {permanentExemptionReview!=null ? `${permanentExemptionReview.name}` : ''}
                                </div>
                                
                                <TextField
                                    label="Challan Number for online deposit of Renewal Fee"
                                    name="challanNumber"
                                    onChange={this.handleChange} 
                                    value={challanNumber} 
                                    errorMessage={challanNumber_error} 
                                    disabled={challanNumber_defect}
                                />
                                <TextField
                                    label="Amount"
                                    name="amount"
                                    onChange={this.handleChange} 
                                    value={amount} 
                                    errorMessage={amount_error} 
                                    disabled={amount_defect}
                                />
                                {/*<ActionButton iconProps={addIcon} allowDisabledFocus>Attach a sheet showing the calculation of amount as per runway length</ActionButton>*/}
                                <TextField
                                    label="Name of the drawee bank"
                                    name="nameDraweeBank"
                                    onChange={this.handleChange} 
                                    value={nameDraweeBank} 
                                    errorMessage={nameDraweeBank_error} 
                                    disabled={nameDraweeBank_defect}/>
                                <Text variant='medium'>Select the date on which challan was submitted in the bank</Text>
                                <DatePicker
                                    onSelectDate={(e)=> {this.onDateChange(e,'dateChallanSubmission')}} 
                                    firstDayOfWeek={DayOfWeek.Sunday}
                                    value={this.onParseDateFromString(dateChallanSubmission)}
                                    disabled={!(dateChallanSubmission_defect==null) && !dateChallanSubmission_defect}
                                    errorMessage={dateChallanSubmission_error}
                                    className={controlClass.control}
                                    strings={DayPickerStrings}
                                    placeholder="Select a Date."
                                    ariaLabel="Select a Date."
                                />
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
