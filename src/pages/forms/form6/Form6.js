import React, { Component } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup} from 'office-ui-fabric-react';
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

const stackTokens = { childrenGap: 20 };

const options = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
];

export default class Form6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             manualEnclosed:"Yes",
             dateToBeSubmitted: "",
             dateToBeSubmitted_error:"",
             dateToBeSubmitted_defect: null,
             aerodromeManual: null,
        }
    }

    _onChange = (ev, option) => {
        this.setState({manualEnclosed:option.key})
        this.setState({check:option.key})
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
    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {

        const {
            dateToBeSubmitted,
            dateToBeSubmitted_error,
            dateToBeSubmitted_defect,
            aerodromeManual,
        } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Aerodrome Manual</Text>
                                <ChoiceGroup 
                                    defaultSelectedKey="Yes"
                                    options={options}
                                    onChange={this._onChange}
                                    label="Is manual enclosed?"
                                    required={true}
                                />
                                <br/>
                                {
                                    this.state.manualEnclosed==="No" ? 
                                        <div>
                                            <TextField
                                                label="Please indicate when this is likely to be submitted to DGCA."
                                                multiline rows={3}
                                                name="dateToBeSubmitted"
                                                onChange={this.handleChange} 
                                                value={dateToBeSubmitted} 
                                                errorMessage={dateToBeSubmitted_error} 
                                                disabled={dateToBeSubmitted_defect}
                                            />
                                            <Text variant={'small'} >( Note: An Aerodrome Licence will not be granted until an acceptable aerodrome Manual has been received by DGCA)</Text>
                                        </div>  :
                                    <div class="button-wrap" style={{paddingBottom:'15px'}}> 
                                        <label class ="new-button" for="upload"> Upload Aerodrome Manual
                                        <input id="upload" name="aerodromeManual" type="file" onChange={this.handleFileChange}/>
                                        </label>
                                        {aerodromeManual!=null ? `${aerodromeManual.name}` : ''}
                                    </div>
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
