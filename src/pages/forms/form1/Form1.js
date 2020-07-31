import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton  } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ActionButton} from 'office-ui-fabric-react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

//style
import './style.css'

//apollo client
import gql from 'graphql-tag';
import { Mutation, Query } from '@apollo/react-components';

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

const addIcon = { iconName: 'Add' };

const removeIcon = { iconName: 'Remove' };

const stackTokens = { childrenGap: 20 };

const GET_OWNERS = gql`
query Users($role: Roles){
  users(role: $role){
    id
    email
    name
  }
}
`;

class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placeName: "",
            placeName_defect: false,
            placeName_error: "",
            owner: "",
            owner_defect: false,
            owner_error: "",
            situation: "",
            situation_defect: false,
            situation_error: "",
            city: "",
            city_defect: false,
            city_error: "",
            statedistrict: "",
            statedistrict_defect: false,
            statedistrict_error: "",
            grid: null,
            grid_defect: false,
            grid_error: "",
            runways:[{length:'',orentatation:''}],
            elevationFeet: "",
            elevationFeet_defect: false,
            elevationMeter: "",
            elevationMeter_defect: false,
            elevationMeter_error: "",
            longitude: "",
            longitude_defect: false,
            longitude_error: "",
            latitude: "",
            latitude_defect: false,
            latitude_error: "",
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChangeOwnerDropdown = (e, option) => {
        this.setState({
            owner:option.text
        })
    }

    handleFileChange=(e) => {
        this.setState({
            [e.target.name]:e.target.files[0]
        })
    }

    handleRunwayChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleRunwayNameChange = idx => evt => {
        const newRunways = this.state.runways.map((runway, sidx) => {
            if (idx !== sidx) return runway;
            return { ...runway, [evt.target.name]: evt.target.value };
        });
    
        this.setState({ runways: newRunways });
    };
    
    handleAddRunway = () => {
        this.setState({
            runways: this.state.runways.concat([{ length: "",orentatation: "" }])
        });
    };

    handleRemoveRunway = idx => () => {
        this.setState({
            runways: this.state.runways.filter((s, sidx) => idx !== sidx)
        });
    };

    render() {

        const {
            placeName,
            placeName_defect,
            placeName_error,
            situation,
            situation_defect,
            situation_error,
            statedistrict,
            statedistrict_defect,
            statedistrict_error,
            city,
            city_defect,
            city_error,
            grid,
            owner,
            grid_defect,
            grid_error,
            runways,
            elevationFeet,
            elevationFeet_defect,
            elevationMeter,
            elevationMeter_defect,
            elevationFeet_error,
            elevationMeter_error,
            latitude,
            latitude_defect,
            latitude_error,
            longitude,
            longitude_defect,
            longitude_error
        } = this.state;

        return (
            <Mutation mutation={FORM1} >
            { (form1function, {loading, data, error}) => {
                if(error) console.log(error);
                if(data)console.log(data.enterAerodrome);
                return(
                <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                    <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                        <Card styles={styles.cardStyles}>
                            <Card.Section>
                                    <Text variant={'xxLarge'}>
                                        Details of aerodrome<em>(as required to be shown on the licence)</em>
                                    </Text>
                                    <TextField
                                        name="placeName"
                                        onChange={this.handleChange}
                                        value={placeName}
                                        errorMessage={placeName_error}
                                        disabled={placeName_defect}
                                        label="Place name by which the aerodrome
                                            is to be known in all future references"/>
                                    <Query query={GET_OWNERS} variables={{ role: "Owner"}}>
                                        {({ loading, error, data }) => {
                                        if (loading) return 'Loading...';
                                        if (error) return `Error! ${error.message}`;
                                        return (
                                            <Dropdown
                                                placeholder="Select a Owner"
                                                label="Select a Owner"
                                                options={data.users.map(v => ({key: v.id, text: v.name}))}
                                                onChange={(e,i) => this.setState({owner: i.key})}
                                            />
                                            );
                                        }}
                                    </Query>
                                    {/*Fax number to be added to Person, and this dropdown needs to be connected to Person*/}
                                    <TextField
                                        name="situation"
                                        onChange={this.handleChange}
                                        value={situation}
                                        errorMessage={situation_error}
                                        disabled={situation_defect}
                                        label="Situation of the aerodrome site with
                                            reference to the nearest airport, railway
                                            station and town/village"
                                        multiline rows={3}/>
                                    <TextField
                                        name="city"
                                        onChange={this.handleChange}
                                        value={city}
                                        errorMessage={city_error}
                                        disabled={city_defect}
                                        label="City/District which situated"/> {/*To be added in db*/}
                                    <TextField
                                        name="statedistrict"
                                        onChange={this.handleChange}
                                        value={statedistrict}
                                        errorMessage={statedistrict_error}
                                        disabled={statedistrict_defect}
                                        label="State"/> {/*To be added in db*/}
                                    <Text variant={'medium'}>
                                        Attach a survey map, scale1:10,000 showing by means of broken line the exact boundaries of the aerodrome.
                                    </Text>
                                    <div class="button-wrap">
                                        <label class ="new-button" for="upload"> Upload File
                                        <input id="upload" name="grid" type="file" onChange={this.handleFileChange}/>
                                        </label>
                                        {grid!=null ? `${grid.name}` : ''}
                                    </div>
                                    <TextField
                                        name="latitude"
                                        onChange={this.handleChange}
                                        value={latitude}
                                        errorMessage={latitude_error}
                                        disabled={latitude_defect}
                                        label="Latitude of the aerodrom"/>
                                    <TextField
                                        name="longitude"
                                        onChange={this.handleChange}
                                        value={longitude}
                                        errorMessage={longitude_error}
                                        disabled={longitude_defect}
                                        label="Longitude of the aerodrome"/>
                                    <TextField
                                        name="elevationFeet"
                                        onChange={this.handleChange}
                                        value={elevationFeet}
                                        errorMessage={elevationFeet_error}
                                        disabled={elevationFeet_defect}
                                        label="Elevation of the Aerodrome reference point (AMSL) in feet"/>
                                    <TextField
                                        name="elevationMeter"
                                        onChange={this.handleChange}
                                        value={elevationMeter}
                                        errorMessage={elevationMeter_error}
                                        disabled={elevationMeter_defect}
                                        label="Elevation of the Aerodrome reference point (AMSL) in metres"/>
                                    <Text
                                        variant={'medium'}>
                                            Enter Details about <strong>runway(s)</strong>
                                    </Text>
                                    <ActionButton   // Need to add information for multiple runway(s) in db
                                        iconProps={addIcon}
                                        allowDisabledFocus
                                        onClick={this.handleAddRunway}>
                                     Click for more runway(s).
                                    </ActionButton>
                                    {runways.map((runway, idx) => (
                                        <>
                                         <TextField label={`Length of ${idx+1} runway in metres`} value={runway.name} onChange={this.handleRunwayNameChange(idx)} name="length" required/>
                                         <TextField label={`Orientation  ${idx+1} of runway`} value={runway.orentatation} onChange={this.handleRunwayNameChange(idx)} name="orentatation" required/>
                                         <ActionButton  
                                            iconProps={removeIcon}
                                            allowDisabledFocus
                                            // style={{color:'#922427'}}
                                            onClick={this.handleRemoveRunway(idx)}>
                                            Remove a runway
                                         </ActionButton>
                                        </>
                                    ))}
                                    <Stack horizontal tokens={stackTokens}>
                                        <DefaultButton text="Back" allowDisabledFocus />
                                        <PrimaryButton 
                                        onClick={() => {
                                            console.log(this.state)
                                            form1function({variables: {
                                                placeName: placeName,
                                                state: statedistrict,
                                                city: city,
                                                situation: situation,
                                                grid: grid,
                                                owner: owner,
                                                lat: latitude,
                                                long: longitude,
                                                runways: runways
                                            }})
                                        }
                                        }text="Next" allowDisabledFocus />
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

export default Form2;

const FORM1 = gql`
mutation EnterAerodrome(
  $placeName: String
  $state: String
  $situation: String
  $city: String
  $grid: Upload
  $owner: String
  $lat: String
  $long: String
  $runways: [RunwayFields]
) {
  enterAerodrome(
    input: {
      placeName: $placeName
      city: $city
      situation: $situation
      state: $state
      grid: $grid
      owner: $owner
      lat: $lat
      long: $long
      runways: $runways
    }
  )
}
`;
