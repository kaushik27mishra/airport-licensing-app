import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import { client } from '../../..';

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
                data:"",
                suggestion:"",
                checked:false
            },
            placeName: "",
            owner:{
                id:"",
                name:"",
                address:{
                    line1: '',
                    line2: '',
                    pinCode: 0,
                    city: '',
                    state: '',
                    country: ''
                  },
                phone: "",
                fax: "", //to be added
                email: "" // to be added
            },
            situation: "",
            state: "",
            grid: "",
            runways: [
                {
                    orentatation: '',
                    length: ''
                }
            ],
            latitude: "",
            longitude: "",
            status: ""

        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        client.query({
            query: gql`
            query License($id: String!) {
                license(id: $id) {
                  aerodrome {
                    placeName
                    state
                    city
                    situation
                    grid
                    elevationMeter {
                      data
                      checked
                      suggestion
                    }
                    runways {
                      orentatation
                      length
                    }
                    owner {
                      name
                      email
                      phone
                      id
                      address {
                        line1
                        line2
                        city
                        state {
                          state
                          id
                            country
                        }
                        pinCode
                      }
                    }
                    lat
                    long
                  }
                }
              }
              `,
            variables: { id: id }
        }).then( res => {
            const { aerodrome } = res.data.license;
            if(aerodrome!==null) {
                this.setState({
                    placeName: aerodrome.placeName ,
                    owner:{
                        id: aerodrome.owner.id,
                        name: aerodrome.owner.name ,//not know which field will be entered ,
                        address:{
                            line1: aerodrome.owner.address.line1,
                            line2: aerodrome.owner.address.line2,
                            pinCode: aerodrome.owner.address.pinCode,
                            city: aerodrome.owner.address.city,
                            state: aerodrome.owner.address.state.state,
                            country: aerodrome.owner.address.state.country
                          },
                        phone: aerodrome.owner.phone,
                        fax: aerodrome.owner.phone, //to be added
                        email: aerodrome.owner.email // to be added
                    },
                    situation: aerodrome.situation ,
                    state: aerodrome.state,
                    grid: aerodrome.grid,
                    map: true, //to be added
                    runways: aerodrome.runways,
                    latitude: aerodrome.lat,
                    longitude: aerodrome.long
                })
            }

        })

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

    statusOptions = [
        { key: 'Submitted', text: 'Submitted',},
        { key: 'Edited', text: 'Edited' },
        { key: 'NotAproved', text: 'Not Approved' },
        { key: 'Approved', text: 'Approved' },
    ];
   


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
            latitude,
            status,
            city
         } = this.state;

        return (
            <Mutation mutation={FORM1}>
            {(form1function,{loading, error, data}) => {
                if(error) console.log(error);
                if(data) console.log(data.enterAerodrome);
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
                                                            <em>{runway.orentatation}</em>
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
                                        <tr>
                                            <td style={{maxWidth:"150px"}}>
                                                <Text variant={'large'}>Approval Status</Text>
                                            </td>
                                            <td>
                                                <Dropdown
                                                    placeholder="Select Status"
                                                    options={this.statusOptions}
                                                    onChange={(e,i) => this.setState({status: i.key})}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus/>
                                    <PrimaryButton
                                        onClick={() => {
                                            form1function({variables: {
                                                id: this.props.match.params.id,
                                                placeName: placeName,
                                                state: state,
                                                situation: situation,
                                                city: city,
                                                owner: owner.id,
                                                grid: grid,
                                                lat: latitude,
                                                long: longitude,
                                                runways: runways.map((i) => ({length: i.length, orentatation: i.orentatation})),
                                                status: status
                                            }})
                                        }} 
                                        text="Next" 
                                        allowDisabledFocus/>
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
            )}}
            </Mutation>
        )
    }
}

const FORM1=gql`
mutation UpdateAerodromeWithoutUpload(
    $id: String!
    $placeName: String
    $state: String
    $situation: String
    $city: String
    $owner: String
    $grid: String
    $lat: String
    $long: String
    $runways: [RunwayFields]
    $status: FormStatus
  ) {
    updateAerodromeWithoutUpload(
      id: $id
      input: {
        placeName: $placeName
        city: $city
        situation: $situation
        grid: $grid
        state: $state
        owner: $owner
        lat: $lat
        long: $long
        runways: $runways
        status: $status
      }
    )
  }  
`