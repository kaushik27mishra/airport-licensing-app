import React, { Component } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup } from 'office-ui-fabric-react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

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

const options = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
];

export default class SampleForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             check:""
        }
    }

    _onChange = (ev, option) => {
        console.dir(option);
        this.setState({check:option.key})
    }
    
    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Aerodrome Details</Text>
                                <TextField label="Standard" />
                                <TextField label="Standard" />
                                <TextField label="Disabled" disabled defaultValue="I am disabled" />
                                <TextField label="Read-only" readOnly defaultValue="I am read-only" />
                                <TextField label="Required " required />
                                <TextField label="With error message" errorMessage="Error message" />
                                <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
                                <TextField label="With placeholder" placeholder="Please enter text here" />
                                <TextField label="Disabled with placeholder" disabled placeholder="I am disabled" />
                                <ChoiceGroup defaultSelectedKey="No" options={options} onChange={this._onChange} label="Pick one" required={true} />
                                {
                                    this.state.check==="Yes" ? <TextField label="With placeholder" placeholder="Please enter text here" /> : null
                                }
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Standard" allowDisabledFocus />
                                    <PrimaryButton text="Primary" allowDisabledFocus />
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
