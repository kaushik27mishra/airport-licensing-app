import React, { Component } from 'react'
import Loader from '../../../components/loader/Loader'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup} from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';


import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';
//style
const styles = {
    cardStyles: {
        root: {
          data: false,
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
    { key: true, text: 'Yes' },
    { key: false, text: 'No' },
];

export default class Form6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             manualEnclosed:null,
             dateToBeSubmitted: "",
             dateToBeSubmitted_error:"",
             dateToBeSubmitted_defect: null,
             aerodromeManual: null,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form6 {
                    manual {
                      data
                      suggestion
                      checked
                    }
                    enclosed
                    indicateDGCA
                  }
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { form6 } = res.data.license;
            if(form6!==null) {
                this.setState({
                  data: true,
                 // saare variables 
                 manualEnclosed:form6.enclosed,
                 dateToBeSubmitted: "",
                 dateToBeSubmitted_error:"",
                 dateToBeSubmitted_defect: true,
                 aerodromeManual: true,
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

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
            data,
            dateToBeSubmitted,
            dateToBeSubmitted_error,
            dateToBeSubmitted_defect,
            aerodromeManual,
            manualEnclosed,
        } = this.state;

        var MUTATION;

        if(data) {
            MUTATION= FORM6_UPLOAD
        }
        else {
            MUTATION= FORM6
        }

        return (
            <Mutation mutation={MUTATION}>
            {(form6funstion,{loading, data_res, error}) => {
                if(loading) {return <Loader/>}
                if(error) console.log(error);
                    return (
                        <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                                <Card styles={styles.cardStyles}>
                                    <Card.Section>
                                            <Text variant={'xxLarge'} >Aerodrome Manual</Text>
                                            <ChoiceGroup 
                                                defaultSelectedKey={true}
                                                options={options}
                                                onChange={this._onChange}
                                                label="Is manual enclosed?"
                                                required={true}
                                            />
                                            <br/>
                                            {
                                                manualEnclosed===false ? 
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
                                                <PrimaryButton 
                                                    onClick={()=> {
                                                        if(data) {
                                                            form6funstion({
                                                                variables: {
                                                                    id: this.props.match.params.id,
                                                                    manual: aerodromeManual,
                                                                    enclosed: manualEnclosed,
                                                                    indicateDGCA: dateToBeSubmitted,
                                                                }
                                                            })
                                                        }
                                                        else {
                                                            form6funstion({
                                                                variables: {
                                                                    id: this.props.match.params.id,
                                                                    manual: aerodromeManual,
                                                                    enclosed: manualEnclosed,
                                                                    indicateDGCA: dateToBeSubmitted,
                                                                }
                                                            })
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
                }
            }
            </Mutation>
        )
    }
}

const FORM6 = gql`
mutation EnterForm6(
    $id: String!
    $manual: Upload
    $enclosed: Boolean
    $indicateDGCA: String
  ) {
    enterForm6(
      id: $id
      input: {
          manual:{data: $manual}
        enclosed: $enclosed
        indicateDGCA: $indicateDGCA
      }
    )
  }
`;

const FORM6_UPLOAD = gql`
mutation UpdateForm6(
    $id: String!
    $manual: String
    $manual_defect: Boolean
    $manual_error: String
    $enclosed: Boolean
    $indicateDGCA: String
  ) {
    updateForm6(
      id: $id
      input: {
        manual: {
          data: $manual
          checked: $manual_defect
          suggestion: $manual_error
        }
        enclosed: $enclosed
        indicateDGCA: $indicateDGCA
      }
    )
  }
  
`;  
