import React, { Component } from 'react'
import Loader from '../../../components/loader/Loader'
//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DatePicker, DayOfWeek, mergeStyleSets } from 'office-ui-fabric-react';

import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
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


// For Choice Pickers
const options = [
    { key: true, text: 'Yes' },
    { key: false, text: 'No' },
];

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

export default class Form3 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: true,
             owner: true,
             rightsIfNotOver: "",
             rightsIfNotOver_error: "",
             rightsIfNotOver_defect: null,
             startingPeriod: '2020-07-13', // default value
             startingPeriod_error: "",
             startingPeriod_defect: null,
             endingPeriod: "2020-07-13",
             endingPeriod_error: "",
             endingPeriod_defect: null,
             termination: "2020-07-13",
             termination_error: "",
             termination_defect: null,
        }
    }

    componentDidMount() {
        this.setState({
            isLoading:true,
        })
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form3 {
                    owner
                    rightsIfNotOver {
                      data
                      suggestion
                      checked
                    }
                    startPeriod
                    terminationPeriod
                    endPeriod
                  }
                }
              }`,
            variables: { id: id }
        }).then( res => {
            const { form3 } = res.data.license;
            if(form3!==null) {
                this.setState({
                    data: true,
                    owner: form3.owner,
                    rightsIfNotOver: form3.rightsIfNotOver.data,
                    rightsIfNotOver_error: form3.rightsIfNotOver.suggestion,
                    rightsIfNotOver_defect: form3.rightsIfNotOver.checked,
                    startingPeriod: form3.startPeriod, // default value
                    startingPeriod_error: "",
                    startingPeriod_defect: true ,
                    endingPeriod: form3.endPeriod,
                    endingPeriod_error: "",
                    endingPeriod_defect: true,
                    termination: form3.terminationPeriod,
                    termination_error: "",
                    termination_defect: true,
                    isLoading:false,
                })
            }
            else {
                this.setState({
                    data: false,
                    isLoading:false,
                })
            }

        })

    }


    _onChangeowner = (ev,option) => {
        this.setState({owner:option.key})
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
            isLoading,
             data,
             owner,
             rightsIfNotOver,
             rightsIfNotOver_error,
             rightsIfNotOver_defect,
             startingPeriod,
             startingPeriod_error,
             startingPeriod_defect,
             endingPeriod,
             endingPeriod_error,
             endingPeriod_defect,
             termination,
             termination_error,
             termination_defect,
        } = this.state;

        if(isLoading)
        {return <Loader/>}

        var MUTATION;
        if(data) {
            MUTATION=FORM3_UPDATE;
        }
        else {
            MUTATION=FORM3;
        }

        return (
            <Mutation mutation={MUTATION}>
            { (form3funstion,{loading, data_res, error}) => {
                if(loading) {return <Loader/>}
                if(error) console.log(error);
                return (
                <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                <Text 
                                    variant={'xxLarge'} >
                                        Control of the Aerodrome 
                                </Text>
                                <ChoiceGroup
                                    defaultChecked={owner} 
                                    options={options}
                                    onChange={this._onChangeowner} 
                                    label="Are you the owner of the aerodrome site" 
                                    required={true}/>
                                    {
                                        owner===false ? 
                                        <>
                                            <TextField
                                                name="rightsIfNotOver" 
                                                onChange={this.handleChange} 
                                                value={rightsIfNotOver} 
                                                errorMessage={rightsIfNotOver_error} 
                                                disabled={rightsIfNotOver_defect}
                                                label="Please state the details of the
                                                    rights you hold over the land" 
                                                placeholder="Please enter details here"
                                                multiline rows={3} /> 

                                            <Text 
                                                variant='medium'>
                                                    The period from which you hold these rights
                                            </Text>
                                            <DatePicker
                                                className={controlClass.control}
                                                onSelectDate={(e)=> {this.onDateChange(e,'startingPeriod')}} // change the second input
                                                firstDayOfWeek={DayOfWeek.Sunday} // no need to change
                                                value={this.onParseDateFromString(startingPeriod)} // change the name of input variable
                                                strings={DayPickerStrings} // no need to change
                                                disabled={!(startingPeriod_defect==null) && !startingPeriod_defect}
                                                placeholder="Select a date."
                                                ariaLabel="Select a date"
                                            />
                                            {startingPeriod_error===''? null : <Text style={{color:'#FF0000',marginTop:'0'}} variant='small'>{startingPeriod_error}</Text>}
                                            <Text 
                                                variant='medium'>
                                                    The period to which you hold these rights
                                            </Text>
                                            <DatePicker
                                                onSelectDate={(e)=> {this.onDateChange(e,'endingPeriod')}} 
                                                firstDayOfWeek={DayOfWeek.Sunday}
                                                value={this.onParseDateFromString(endingPeriod)}
                                                disabled={!(endingPeriod_defect==null) && !endingPeriod_defect}
                                                errorMessage={endingPeriod_error}
                                                className={controlClass.control}
                                                strings={DayPickerStrings}
                                                placeholder="Select a date."
                                                ariaLabel="Select a date"
                                            /> 
                                            {endingPeriod_error===''? null : <Text style={{color:'#FF0000',marginTop:'0'}} variant='small'>{endingPeriod_error}</Text>}
                                            <Text variant='medium'>Termination of these rights</Text> {/*Needs to be made DateField*/}
                                            <DatePicker
                                                onSelectDate={(e)=> {this.onDateChange(e,'termination')}} 
                                                firstDayOfWeek={DayOfWeek.Sunday}
                                                value={this.onParseDateFromString(termination)}
                                                disabled={!(termination_defect==null) && !termination_defect}
                                                errorMessage={termination_error}
                                                className={controlClass.control}
                                                strings={DayPickerStrings}
                                                placeholder="Select a date."
                                                ariaLabel="Select a date"
                                            />
                                            {termination_error===''? null : <Text style={{color:'#FF0000',marginTop:'0'}} variant='small'>{termination_error}</Text>}
                                        </>
                                        : null
                                    }
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus />
                                    <PrimaryButton
                                        onClick={() => {
                                            if(data) {
                                                form3funstion({variables: {
                                                    id: this.props.match.params.id,
                                                    //owner: owner,
                                                    rightsIfNotOver: rightsIfNotOver ,
                                                    startPeriod: startingPeriod ,
                                                    terminationPeriod: termination,
                                                    endPeriod: endingPeriod,    
                                                }})
                                            }
                                            else {
                                                form3funstion({variables: {
                                                    id: this.props.match.params.id,
                                                   // owner: owner,
                                                    rightsIfNotOver: rightsIfNotOver,
                                                    rightsIfNotOver_defect: rightsIfNotOver_defect,
                                                    rightsIfNotOver_error: rightsIfNotOver_error,
                                                    startPeriod: startingPeriod,
                                                    terminationPeriod: termination,
                                                    endPeriod: endingPeriod,
                                                }})
                                            }
                                        }} 
                                        text="Next" 
                                        allowDisabledFocus />
                                </Stack>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
                )
            }}
            </Mutation>
        )
    }
}

const FORM3 = gql`
mutation EnterForm3(
    $id: String!
    $owner: Boolean
    $rightsIfNotOver: String
    $startPeriod: String
    $terminationPeriod: String
    $endPeriod: String
  ) {
    enterForm3(
      id: $id
      input: {
        owner: $owner,
        rightsIfNotOver: {data: $rightsIfNotOver}
        startPeriod: $startPeriod
        terminationPeriod: $terminationPeriod
        endPeriod: $endPeriod
      }
    )
  }
`;

const FORM3_UPDATE = gql`
mutation UpdateForm3(
  $id: String!
  $owner: Boolean
  $rightsIfNotOver: String
  $rightsIfNotOver_defect: Boolean
  $rightsIfNotOver_error: String
  $startPeriod: String
  $terminationPeriod: String
  $endPeriod: String
) {
  updateForm3(
    id: $id
    input: {
      owner: $owner
      rightsIfNotOver: {
        data: $rightsIfNotOver
        checked: $rightsIfNotOver_defect
        suggestion: $rightsIfNotOver_error
      }
      startPeriod: $startPeriod
      terminationPeriod: $terminationPeriod
      endPeriod: $endPeriod
    }
  )
}

`;  
