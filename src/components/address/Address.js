import React from 'react';

import { TextField} from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const stackTokens = { childrenGap: 20 };
const dropdownStyles = { dropdown: { width: 300 } };

const CityOptions = [
    { key: 'A', text: 'Option a', title: 'I am option a.' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c', disabled: true },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
]

const StateOptions = [
    { key: 'A', text: 'Option a', title: 'I am option a.' },
    { key: 'B', text: 'Option b' },
    { key: 'C', text: 'Option c', disabled: true },
    { key: 'D', text: 'Option d' },
    { key: 'E', text: 'Option e' },
]

const address = (props) => (
    <>
        <TextField label="Line 1"/>
        <TextField label="Line 2"/>
        <Stack tokens={stackTokens} verticalAlign="end">
            <Stack horizontal tokens={stackTokens} verticalAlign="end">
                <Dropdown
                    placeholder="Select"
                    label="Enter State"
                    options={StateOptions}
                    required
                    styles={dropdownStyles}
                />
            </Stack>
            <Stack horizontal tokens={stackTokens} verticalAlign="end">
                <Dropdown
                    placeholder="Select"
                    label="Enter City"
                    options={CityOptions}
                    required
                    styles={dropdownStyles}
                />
            </Stack>
      </Stack>
        <TextField label="Pincode"/>
    </>
)

export default address