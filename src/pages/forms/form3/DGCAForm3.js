import React, { Component } from 'react'

//ui
import { Text, PrimaryButton, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import DGCAChecklist from '../../../components/form/DGCAChecklist';

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
            rightsIfNotOver:{
                data:"Abdkjabd",
                suggestion:"",
                checked:false
            }
        }
    }

    handleRightsIfNotOverValueChange = (e) => {
        this.setState({
            rightsIfNotOver : {
                ...this.state.rightsIfNotOver,
                suggestion: e.target.value,
            }
        })
    }

    handleRightsIfNotOverCheckboxChange = (e,checked) => {
        this.setState({
            rightsIfNotOver : {
                ...this.state.rightsIfNotOver,
                suggestion:"",
                checked: !!checked
            }
        })
    }

    


    render() {
        const { rightsIfNotOver } = this.state;

        return (
            <div className="ms-Grid-row" style={{paddingBottom:'100px'}}>
                <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.pivot}`}>
                    <Card styles={styles.cardStyles}>
                        <Card.Section>
                                <Text variant={'xxLarge'}>Review: Form3</Text>
                                <table style={{width:"100%"}}>
                                    <thead>
                                        <th style={{textAlign:'left'}}>Field</th>
                                        <th style={{textAlign:'left'}}>Value Filled</th>
                                        <th style={{textAlign:'left'}}>Error</th>
                                        <th style={{textAlign:'left'}}>Remarks</th>
                                    </thead>
                                    <tbody>
                                        <DGCAChecklist 
                                            field="Details of the rights you hold over the land" 
                                            value={rightsIfNotOver} 
                                            handleChange={this.handleRightsIfNotOverValueChange} 
                                            onChange={this.handleRightsIfNotOverCheckboxChange}
                                        />
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
