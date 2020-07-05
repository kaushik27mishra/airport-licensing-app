// work in progress
import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton  } from 'office-ui-fabric-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { ActionButton} from 'office-ui-fabric-react';


//components
import Address from '../../../components/form/Address'

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

const addFriendIcon = { iconName: 'OpenFile' };
const stackTokens = { childrenGap: 20 };

class Form2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'} >Details of aerodrome<em>(as required to be shown on the licence)</em></Text>
                                <TextField label="Place name by which the aerodrome is to be known in all future references" />
                                <TextField label="Name of owner of the aerodrome"/>
                                <Address/>
                                <TextField label="Telephone Number"/>
                                <TextField label="Fax Number"/>
                                <TextField label="Email/Telex Number"/>
                                <TextField label="Situation of the aerodrome site with reference to the nearest airport, railway station and town/village" multiline rows={3} />
                                <TextField label="State/District which situated"/>
                                <TextField label="Grid Reference in WGS 84" multiline rows={3} />
                                <ActionButton iconProps={addFriendIcon} allowDisabledFocus>
                                    Upload File
                                </ActionButton>
                                <Stack horizontal tokens={stackTokens}>
                                    <DefaultButton text="Back" allowDisabledFocus />
                                    <PrimaryButton text="Next" allowDisabledFocus />
                                </Stack>
                                 {/* gotta add file upload rn*/}
                        </Card.Section>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Form2;
