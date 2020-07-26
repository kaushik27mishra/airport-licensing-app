import React, { Component } from 'react'

//ui
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Text, PrimaryButton, MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { Card } from '@uifabric/react-cards';

const StateOptions = [
    { key: 'A', text: 'Option a', title: 'I am option a.' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c' },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
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

export class SignupForm extends Component {
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
                pincode:''
            },
            govtId: null,
            signImage:null,

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

    handleAdressStateChange = (name,e,item) => {
        this.setState({
            [name] : {
                ...this.state.licenseeAddress,
                state: item,
            }
        })
    }

    handleAdressChange = (name,e) => {
        this.setState({
            [name] : {
                ...this.state.licenseeAddress,
                [e.target.name]: e.target.value,
            }
        })
    }

    setImageURL = (imageURL) =>{
        const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
        if(imageURL!==whiteURL && imageURL!==this.state.signImage)
        {   
            this.setState({
                signImage:imageURL
            })    
        }
    };
    
    render() {

        const {
            name,
            email,
            phone,
            role,
            address,
            govtId,
            signImage,
        } = this.state;

        const SIGNUP = gql`
            mutation CreateUser(
                $name: String,
              $email: EmailAddress,
              $phone: PhoneNumber,
              $role: Roles,
              $signImage: Upload,
              $govtId: Upload
              $address: AddressFields  
            ){
              createUser(input: {
                name: $name,
                email: $email,
                phone: $phone,
                role: $role,
                signImage: $signImage,
                govtId: $govtId,
                address: $address
              }){
                id
                name
                email
                phone
                role
                signImage
                govtId
                address {
                  id
                  line1
                  line2
                  city
                  pinCode
                  state {
                    id
                    state
                    country
                  }
                }
              }
        }`;

        const [ signUpFunation ,{loading, error, data }] = useLazyQuery(SIGNUP);

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
                            label="Enter State"
                            onChange={onChange}
                            options={StateOptions}
                            styles={dropdownStyles}
                        />
                        <div className="button-wrap">
                            <label className="new-button" htmlFor="upload1"> Upload Private Key File
                                <input id="upload1" name="grid" type="file" onChange={this.handleFileChange}/>
                            </label>
                            {govtId!=null ? `${govtId.name}` : ''}
                        </div>
                        <Address
                            text="Address" 
                            handleChange={(e) => this.handleAdressChange('address',e)} 
                            handleAdressStateChange={(e,item) => this.handleAdressStateChange('address',e,item)} 
                            address={address}/>
                        <SignaturePad setImageURL={this.setImageURL}/>
                        <PrimaryButton 
                            disabled={loading} 
                            text="Submit" 
                            onClick={() =>  {
                                    loginFunction({variables: {email: loginValue, password: passwordValue, privatekeyFile: privateKey, signCertFile: certKey}})
                                }
                            }
                        />
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SignupForm
