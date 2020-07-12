import React, { Component } from 'react'


//ui
import { Text, PrimaryButton, Stack, DefaultButton, ChoiceGroup,ActionButton } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
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
const addIcon = { iconName: 'Add' };
const stackTokens = { childrenGap: 20 };

const options = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
];

export default class Form7 extends Component {
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
                                <Text variant={'xxLarge'} >Aerodrome Manual</Text>
                                <ChoiceGroup defaultSelectedKey="Yes" options={options} onChange={this._onChange} label="Is manual enclosed?" required={true} />
                                {
                                    this.state.check==="No" ? 
                                    <div>
                                        <TextField label="Please indicate when this is likel to be submitted to DGCA." multiline rows={3}/>
                                        <Text variant={'small'} >( Note: An Aerodrome Licence will not be granted until an acceptable aerodrome Manual has been received by DGCA)</Text>
                                    </div>  :
                                    <ActionButton //to be added in db
                                        iconProps={addIcon} allowDisabledFocus><em>Upload Manual</em>
                                    </ActionButton> 
                                }
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus />
                                    <PrimaryButton text="Next" allowDisabledFocus />
                                </Stack>
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}
