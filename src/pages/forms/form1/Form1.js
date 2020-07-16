import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

//components
import Address from '../../../components/form/Address'

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

export default class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
             name: "",
             name_defect:false,
             name_error:"",
             phone: "",
             phone_defect:false,
             phone_error:"",
             email: "",
             email_defect:false,
             email_error:"",
             fax: "",
             fax_defect:false,
             fax_error:"",
             nationality: "",
             nationality_defect:false,
             nationality_error:"",
             licenseeAddress: {}
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleAdressChange = (e,item=null) => {
        this.setState({
            licenseeAddress : {
                ...this.state.licenseeAddress,
                [e.target.name]: e.target.value,
                state: item ? item.key : this.state.licenseeAddress.state
            }
        })
    }

    render() {

        const {
            name,
             name_defect,
             name_error,
             phone,
             phone_defect,
             phone_error,
             email,
             email_defect,
             email_error,
             fax,
             fax_defect,
             fax_error,
             nationality,
             nationality_defect,
             nationality_error,
             licenseeAddress
        } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Details of Licensee</Text>
                                <TextField 
                                    name="name"
                                    onChange={this.handleChange}
                                    value={name}
                                    errorMessage={name_error}
                                    disabled={name_defect}
                                    label="Full Name"/>
                                <TextField
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={phone}
                                    errorMessage={phone_error}
                                    disabled={phone_defect}
                                    label="Telephone Number"/>
                                {/* To be added in db -> Nationality and Fax Number */}
                                <TextField
                                    name="fax"
                                    onChange={this.handleChange}
                                    value={fax}
                                    errorMessage={fax_error}
                                    disabled={fax_defect}
                                    label="Fax Number"/>
                                <TextField
                                    name="email"
                                    onChange={this.handleChange}
                                    value={email}
                                    errorMessage={email_error}
                                    disabled={email_defect}
                                    label="Email"/>
                                <TextField
                                    name="nationality"
                                    onChange={this.handleChange}
                                    value={nationality}
                                    errorMessage={nationality_error}
                                    disabled={nationality_defect}
                                    label="Nationality"/>
                                <Address text="Address of Licensee" handleChange={this.handleAdressChange} address={licenseeAddress}/>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus/>
                                    <PrimaryButton text="Next" allowDisabledFocus/>
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
