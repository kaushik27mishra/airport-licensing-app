import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton, Checkbox } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

//style
import '../style.css'
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


const stackTokens = { childrenGap: 20 };

export default class DGCAForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            safetyPerson:{
                name: "Safe",
                designation: "Safety",
                phone: "+91 000000000"
            },
            personIncharge:{
                name: "PI",
                designation: "I/C",
                phone: "+91 000000000"
            },
            personInchargeResume:{
                data:null,
                suggestion:"",
                checked:false
            },
            aerodromeSafety:{
                name: "ASafe",
                designation: "ASafety",
                phone: "+91 000000000"
            },
            aerodromeSafetyResume:{
                data:null,
                suggestion:"",
                checked:false
            },
            cnsAtm:{
                name:"CNS Provider",
                address:{
                    line1: 'l1',
                    line2: 'l2',
                    pinCode: 22,
                    city: 'city',
                    state: 'state',
                    country: 'country'
                  }
            },
            metServices:{
                name:"MET Service Provider",
                address:{
                    line1: 'l1',
                    line2: 'l2',
                    pinCode: 22,
                    city: 'city',
                    state: 'state',
                    country: 'country'
                  }
            },
            airTrafficMgmt:{
                name: "Air trafic manager",
                designation: "manage",
                phone: "+91 000000000"
            },
            provisionCNS:{
                name: "day to day cns",
                designation: "manage",
                phone: "+91 000000000"
            },
            provisionRFF: {
                name: "day to day rff",
                designation: "manage",
                phone: "+91 000000000"
            },
            metServicesProvider: {
                name: "day to day met",
                designation: "manage",
                phone: "+91 000000000"
            }

        }
    }

    
    handlePersonInchargeResumeValueChange = (e) => {
        this.setState({
            personInchargeResume: {
                ...this.state.personInchargeResume,
                suggestion: e.target.value,
            }
        })
    }

    handlePersonInchargeResumeCheckboxChange = (e,checked) => {
        this.setState({
            personInchargeResume : {
                ...this.state.personInchargeResume,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    handleAerodromeSafetyResumeValueChange = (e) => {
        this.setState({
            aerodromeSafetyResume: {
                ...this.state.aerodromeSafetyResume,
                suggestion: e.target.value,
            }
        })
    }

    handleAerodromeSafetyResumeCheckboxChange = (e,checked) => {
        this.setState({
            aerodromeSafetyResume : {
                ...this.state.aerodromeSafetyResume,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    render() {
        const {
            safetyPerson,
            personIncharge,
            personInchargeResume,
            aerodromeSafety,
            aerodromeSafetyResume,
            cnsAtm,
            metServices,
            airTrafficMgmt,
            provisionCNS,
            provisionRFF,
            metServicesProvider
         } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Aerodrome Management Personnel</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                        Board Member/ Managing Director or person having specific 
                                                        responsibility for safety
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{safetyPerson.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{safetyPerson.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{safetyPerson.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person in charge of day to day operation of aerodrome.
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{personIncharge.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{personIncharge.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{personIncharge.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Resume</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get" action={personInchargeResume}>
                                                        <button type="submit">Download Resume</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                <Checkbox checked={personInchargeResume.checked} 
                                                    onChange={this.handlePersonInchargeResumeCheckboxChange} />
                                            </td>
                                            <td>
                                                <TextField 
                                                    name="suggestion"
                                                    onChange={this.handlePersonInchargeResumeValueChange}
                                                    value={personInchargeResume.suggestion}
                                                    disabled={!personInchargeResume.checked}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person responsible for Aerodrome Safety.
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{aerodromeSafety.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{aerodromeSafety.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{aerodromeSafety.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Resume</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get" action={aerodromeSafetyResume}>
                                                        <button type="submit">Download Resume</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td style={{textAlign:'center'}}>
                                                <Checkbox checked={aerodromeSafetyResume.checked} 
                                                    onChange={this.handleAerodromeSafetyResumeCheckboxChange} />
                                            </td>
                                            <td>
                                                <TextField 
                                                    name="suggestion"
                                                    onChange={this.handleAerodromeSafetyResumeValueChange}
                                                    value={aerodromeSafetyResume.suggestion}
                                                    disabled={!aerodromeSafetyResume.checked}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                        Provider of CNS-ATM
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Address</Text>
                                            </td>
                                        
                                    
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.line1}</em>
                                                </Text>
                                            </td>
                                        
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.line2}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.pinCode}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.city}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.state}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{cnsAtm.address.country}</em>
                                                </Text>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                        Provider of MET Services
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Address</Text>
                                            </td>
                                        
                                    
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.line1}</em>
                                                </Text>
                                            </td>
                                        
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.line2}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.pinCode}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.city}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.state}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{metServices.address.country}</em>
                                                </Text>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person responsible for overseeing the day to 
                                                    day provisions of the Air Traffic Management.
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{airTrafficMgmt.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{airTrafficMgmt.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{airTrafficMgmt.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person responsible for overseeing the day 
                                                    to day provisions of CNS
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionCNS.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionCNS.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionCNS.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person responsible for overseeing the day 
                                                    to day provisions of RFF
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionRFF.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionRFF.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{provisionRFF.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                    

                                        <tr>
                                            <td>
                                                <p style={{fontSize:'16px'}}>
                                                    <strong>
                                                    The person responsible for overseeing the day to 
                                                    day provisions of MET services
                                                    </strong>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{ metServicesProvider.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Status/Designation</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{ metServicesProvider.designation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Telephone Number</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{ metServicesProvider.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
