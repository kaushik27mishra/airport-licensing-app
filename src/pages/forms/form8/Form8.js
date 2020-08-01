import React, { Component } from 'react'

//components
import SignaturePad from '../../../components/form/SignaturePad'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

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

const stackTokens = { childrenGap: 20 };

export default class Form8 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isChecked:false,
             anyOtherInformation: "",
             anyOtherInformation_error: "",
             anyOtherInformation_defect: null,
             sign: null
        };
        
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  form8 {
                    otherInfo {
                      data
                      suggestion
                      checked
                    }
                  } 
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { form8 } = res.data.license;
            if(form8!==null) {
                this.setState({
                  data: true,
                 // saare variables 
                })
            }
            else {
                this.setState({
                    data: false
                })
            }
        })

    }
  
    _onChangeCheckbox = (ev,option) => {
        var ans=this.state.isChecked
        this.setState({isChecked:!ans})
    }
    _onChange = (ev, option) => {
        this.setState({check:option.key})
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

    setImageURL = (imageURL) =>{
        const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
        if(imageURL!==whiteURL && imageURL!==this.state.sign)
        {   
            this.setState({
                sign:imageURL
            })    
        }
    };

    render() {

        const {
             data,
             anyOtherInformation,
             anyOtherInformation_error,
             anyOtherInformation_defect,
        } = this.state;

        var MUTATION;
        if(data) {
            MUTATION=FORM8_UPLOAD;
        }
        else {
            MUTATION=FORM8;
        }
        return (
            <Mutation mutation={MUTATION}>
            {( form8Function ,{loading,data_res,error}) => {
                    if(loading) return 'loading'
                    if(error) console.log(error);
                    return (
                        <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                                <Card styles={styles.cardStyles}>
                                    <Card.Section>
                                            <Text variant={'xxLarge'} >Further Information</Text>
                                            <TextField  
                                                label="ANY OTHER INFORMATION: The information may include details 
                                                in annex1, annex2 and annex3."
                                                multiline rows={7}
                                                name="anyOtherInformation"
                                                onChange={this.handleChange} 
                                                value={anyOtherInformation} 
                                                errorMessage={anyOtherInformation_error} 
                                                disabled={anyOtherInformation_defect}
                                            />
                                            {/*Create links to anexx1,annex2 and annex3 in text above */}
                                            <Checkbox 
                                                checked={this.state.isChecked} 
                                                onChange={this._onChangeCheckbox} 
                                                defaultChecked={false}
                                                label="I hereby certify that the forgoing information is correct in
                                                every respect and no relevant information has been withheld." />
                                            <Stack horizontal tokens={stackTokens}>
                                                <SignaturePad setImageURL={this.setImageURL}/>
                                            </Stack>
                                            <Stack horizontal tokens={stackTokens}>
                                                <DefaultButton text="Back" allowDisabledFocus />
                                                <PrimaryButton 
                                                    text="Submit"
                                                    onClick={() => {
                                                        if(data) {
                                                            form8Function({
                                                                variables: {
                                                                    // saare variables
                                                                }
                                                            })
                                                        }
                                                        else {
                                                            form8Function({
                                                                variables: {
                                                                    // saare variables except check and defect
                                                                }
                                                            })
                                                        }
                                                    }}  
                                                    allowDisabledFocus 
                                                    disabled={!this.state.isChecked} />
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
            </Mutation>
        )
    }
}

const FORM8 = gql`
mutation EnterForm8($id: String!, $otherInfo: String) {
    enterForm8(id: $id, input: { otherInfo: { data: $otherInfo } })
  }
`;

const FORM8_UPLOAD = gql`
mutation UpdateForm8(
    $id: String!
    $otherInfo: String
    $otherInfo_error: String
    $otherInfo_defect: Boolean
  ) {
    updateForm8(
      id: $id
      input: {
        otherInfo: {
          data: $otherInfo
          checked: $otherInfo_defect
          suggestion: $otherInfo_error
        }
      }
    )
  }
  
`;  
