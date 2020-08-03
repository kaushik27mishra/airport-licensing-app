import React, { Component } from 'react'

//components
import Address from "../../form/Address"

//ui
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

//apollo client
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';

const roles = [
    { key: 'Operator', text: 'Operator' },
    { key: 'Owner', text: 'Owner' },
    { key: 'DGCA', text: 'DGCA' },
    { key: 'RegionalOfficeHead', text: 'RegionalOfficeHead' },
    { key: 'HomeMinistry', text: 'HomeMinistry' },
    { key: 'DefenceMinistry', text: 'DefenceMinistry' },
]

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

const dropdownStyles = { dropdown: { width: 250 } };

class SignupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            email:"",
            phone:"",
            role:"",
            address: {
                line1:'',
                line2:'',
                state:  null,
                city:'',
                pinCode:''
            },
            govtId: null,
            signImage:null,
        }
    }

    onChange = (ev,option) => {
        this.setState({
            role: option.key
        })
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

    handleAdressStateChange = (name,e,item) => {
        this.setState({
            [name] : {
                ...this.state.address,
                state: { state: item.key },
            }
        })
    }

    handleAdressChange = (name,e) => {
        this.setState({
            [name] : {
                ...this.state.address,
                [e.target.name]: e.target.value,
            }
        })
    }

    // decodeBase64Image = (dataString) =>  {
    //   var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    //   var response = {};

    //   if (matches.length !== 3) 
    //   {
    //     return new Error('Invalid input string');
    //   }

    //   response.type = matches[1];
    //   response.data = new Buffer(matches[2], 'base64');

    //   return response;
    // }
    
    render() {

        const {
            name,
            email,
            phone,
            role,
            address,
            govtId,
            signImage
        } = this.state;
        address.pinCode = parseInt(address.pinCode);
        return (
            <Mutation mutation={SIGNUP}>
                { (signup, {loading, error, data}) => {
                    if(error) console.log(error);
                    if(data)console.log(data.createUser)
                    return (
                        <div className="ms-Grid-row" style={{paddingBottom:'300px'}}>
                        <div className={`s-Grid-col ms-sm6 ms-xl6 ${classNames.pivot}`}>
                            <Card styles={styles.cardStyles}>
                                <Card.Section>                
                                {error ? <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close" >There is an error processesing your request</MessageBar>:null}
                                <Text variant={'xxLarge'}>Signup Request Form</Text>
                                <TextField
                                    disabled={loading} 
                                    name="name" 
                                    value={name} 
                                    onChange={this.handleChange} 
                                    label="Full Name"
                                />
                                <TextField
                                    disabled={loading} 
                                    name="email" 
                                    value={email} 
                                    onChange={this.handleChange} 
                                    label="Email"
                                />
                                <TextField
                                    disabled={loading} 
                                    name="phone"
                                    value={phone} 
                                    onChange={this.handleChange} 
                                    label="Phone"
                                />
                                <Dropdown
                                    placeholder="Select"
                                    label="Select Role"
                                    onChange={this.onChange}
                                    options={roles}
                                    styles={dropdownStyles}
                                />
                                <div className="button-wrap">
                                    <label className="new-button" htmlFor="upload1"> Upload Goverment Issued ID
                                        <input id="upload1" name="govtId" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {govtId!=null ? `${govtId.name}` : ''}
                                </div>
                                <div className="button-wrap">
                                    <label className="new-button" htmlFor="upload2"> Upload Your Sign Image
                                        <input id="upload2" name="signImage" type="file" onChange={this.handleFileChange}/>
                                    </label>
                                    {signImage!=null ? `${signImage.name}` : ''}
                                </div>
                                <Address
                                    text="Address" 
                                    handleChange={(e) => this.handleAdressChange('address',e)} 
                                    handleAdressStateChange={(e,item) => this.handleAdressStateChange('address',e,item)} 
                                    address={address}/>
                                <PrimaryButton 
                                    disabled={loading} 
                                    text="Submit" 
                                    onClick={() => {
                                        // var image = this.decodeBase64Image(signImage);
                                        signup({variables: {name, email, phone, role, address, govtId, signImage}})
                                    }}
                                />
                                </Card.Section>
                            </Card>
                        </div>
                    </div>
                    );
                }}
            </Mutation>
        )
    }
}
export default SignupForm

const SIGNUP = gql`
mutation CreateUser(
  $name: String
  $email: EmailAddress
  $phone: PhoneNumber
  $role: Roles
  $signImage: Upload
  $govtId: Upload
  $address: AddressFields
) {
  createUser(
    input: {
      name: $name
      email: $email
      phone: $phone
      role: $role
      signImage: $signImage
      govtId: $govtId
      address: $address
    }
  ) {
    id
  }
}`;