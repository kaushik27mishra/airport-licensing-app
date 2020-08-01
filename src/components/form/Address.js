import React from 'react';

// ui
import { Text, Stack } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
//apollo client
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const stackTokens = { childrenGap: 20 };
const dropdownStyles = { dropdown: { width: 250 } };
const TextStyles = { root: { width: 300 } };

const STATES = gql`
query States{
  states{
    state
  }
}
`;

function Address(props) {
    const {loading, error, data } = useQuery(STATES);
    if(loading) return 'loading...'
    if(error) {
        console.log(error);
    }
    const onChange = (event,item) => {
        props.handleAdressStateChange(event,item)
    };

    return(
        <div style={{paddingTop:'20px',paddingBottom:'20px'}}>  
            <Text variant={'large'}><em>{props.text}</em></Text>
            <hr style={{border: '1px solid black'}} />
            <TextField
                name="line1"
                onChange={props.handleChange}
                value={props.address.line1}
                label="Line 1"
            />
            <TextField
                name='line2' 
                onChange={props.handleChange}
                value={props.address.line2}
                label="Line 2"
            />
            <Stack horizontal tokens={stackTokens} verticalAlign="end">
                
                <Dropdown
                    placeholder="Select"
                    label="Enter State"
                    onChange={onChange}
                    options={(data) ? data.states.map(v => ({key: v.state, text: v.state})): []}
                    styles={dropdownStyles}
                />
                <TextField
                    name='city' 
                    label="City" 
                    styles={TextStyles}
                    onChange={props.handleChange}
                    value={props.address.city}
                />
                <TextField 
                    name='pinCode'
                    label="Pincode" 
                    type="number"
                    styles={TextStyles}
                    onChange={props.handleChange}
                    value={props.address.pinCode}
                />
            </Stack>
        </div>
    )
}

export default Address;