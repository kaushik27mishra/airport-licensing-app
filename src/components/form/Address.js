import React from 'react';

// ui
import { Text, Stack } from 'office-ui-fabric-react';
import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

const stackTokens = { childrenGap: 20 };
const dropdownStyles = { dropdown: { width: 250 } };
const TextStyles = { root: { width: 300 } };

const StateOptions = [
    { key: 'A', text: 'Option a', title: 'I am option a.' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c', disabled: true },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
]

const Address = (props) => (
    <div style={{paddingTop:'20px',paddingBottom:'20px'}}>  
        <Text variant={'large'}><em>{props.text}</em></Text>
        <hr style={{border: '1px solid black'}} />
        <TextField
            name="line1"
            onChange={(e) => props.handleChange(e)}
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
                options={StateOptions}
                onChange={props.handleChange}
                selectedKey={props.address.state ? props.address.state.key : undefined}
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
                name='pincode'
                label="Pincode" 
                styles={TextStyles}
                onChange={props.handleChange}
                value={props.address.pincode}
            />
        </Stack>
        {/* {props.address.line1} */}
        {/* {props.address.line2} */}
        {/* {props.address.state} */}
        {/* {props.address.city} */}
        {/* {props.address.pincode} */}
    </div>
)

export default Address