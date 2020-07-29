import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';

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
            elevationMeter: {
                data:"100ft",
                suggestion:"",
                checked:false
            },
            placeName: "place",
            owner:{
                name:"CNS Provider",
                address:{
                    line1: 'l1',
                    line2: 'l2',
                    pinCode: 22,
                    city: 'city',
                    state: 'state',
                    country: 'country'
                  },
                phone: "+91 9999999",
                fax: "0000", //to be added
                email: "aai@aai.aai" // to be added
            },
            situation: "Situate",
            state: "Uttar Pradesh",
            grid: "xxx",
            map: null, //to be added
            runways: [
                {
                    orientation: 'One',
                    length: '111'
                },
                {
                    orientation: 'Two',
                    length: '222'
                }
            ],
            latitude: "20",
            longitude: "20"

        }
    }
    handleElevationMeterValueChange = (e) => {
        this.setState({
            elevationMeter : {
                ...this.state.elevationMeter,
                suggestion : e.target.value,
            }
        })
    }
    handleElevationMeterCheckboxChange = (e,checked) => {
        this.setState({
            elevationMeter : {
                ...this.state.elevationMeter,
                suggestion:"",
                checked: !!checked
            }
        })
    }


   


    render() {
        const {
            elevationMeter,
            placeName,
            owner,
            situation,
            state,
            grid,
            map,
            runways,
            longitude,
            latitude } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}> Details of aerodrome<em>(as required to be shown on the licence)</em></Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Place name by which the aerodrome is 
                                                to be known in all future references</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}><em>{placeName}</em></Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Name of owner of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.name}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Address of owner of Aerodrome</Text>
                                            </td>
                                        
                                    
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.line1}</em>
                                                </Text>
                                            </td>
                                        
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.line2}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.pinCode}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.city}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.state}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.address.country}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Phone of owner of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.phone}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Fax of owner of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.fax}</em> {/*To be added*/}
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Email of owner of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{owner.email}</em> {/*To be added*/}
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Situation of the aerodrome site 
                                                with reference to the nearest airport, railway station 
                                                and town/village</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{situation}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>State / District in which situated</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{state}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Grid reference in WGS 84</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{grid}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}> {/*to be added*/}
                                                <Text variant={'large'}>A survey map, scale1:10,000 showing 
                                                by means of broken line the exact boundaries of the aerodrome</Text>
                                            </td>
                                            <td>
                                                <div class="button-wrap">
                                                    <form method="get" action={map}>
                                                        <button type="submit">Download Map</button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                        <DGCAChecklist 
                                            field="Elevation of the Aerodrome reference
                                            point (AMSL)" 
                                            value={elevationMeter} 
                                            handleChange={this.handleElevationMeterValueChange} 
                                            onChange={this.handleElevationMeterCheckboxChange}
                                        />
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Latitude of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{latitude}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Longitude of aerodrome</Text>
                                            </td>
                                            <td>
                                                <Text variant={'large'}>
                                                    <em>{longitude}</em>
                                                </Text>
                                            </td>
                                        </tr>
                                        {runways.map((runway, idx) => (
                                            <>
                                                <tr>
                                                    <td style={{maxWidth:"150px"}}>
                                                        <Text variant={'large'}>Orientation of runway {idx+1}</Text>
                                                    </td>
                                                    <td>
                                                        <Text variant={'large'}>
                                                            <em>{runway.orientation}</em>
                                                        </Text>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{maxWidth:"150px"}}>
                                                        <Text variant={'large'}>Length of runway {idx+1}</Text>
                                                    </td>
                                                    <td>
                                                        <Text variant={'large'}>
                                                            <em>{runway.length}</em>
                                                        </Text>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
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
