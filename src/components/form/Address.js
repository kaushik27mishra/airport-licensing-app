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
        <Text variant={'large'}><em>Address</em></Text>
        <hr style={{border: '1px solid black'}} />
        <TextField label="Line 1"/>
        <TextField label="Line 2"/>
        <Stack horizontal tokens={stackTokens} verticalAlign="end">
            <Dropdown
                placeholder="Select"
                label="Enter State"
                options={StateOptions}
                required
                styles={dropdownStyles}
            />
            <TextField label="City" styles={TextStyles}/>
            <TextField label="Pincode" styles={TextStyles}/>
        </Stack>
    </div>
)

export default Address