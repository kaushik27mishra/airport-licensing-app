import React, {Component} from 'react';

// components
import FormList from '../components/cards/formList/FormList'

import {roleHandler} from '../utils/roleHandler'

//ui
import { Text } from 'office-ui-fabric-react';

class FormCards extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            submission: null,
        }
        
    }
    
    render(){
    
        return (
            <>
                {
                    this.props.userRole.role==="DGCA"?
                        <>
                            <Text variant={'xxLarge'}> {/*Trying to give left padding, didn't work*/}
                                Forms submitted for licensing
                            </Text> 
                            <FormList user_type="dgca" submission='null'/>
                        </> :
                            this.props.userRole.role==="Operator"?
                            <>
                                {
                                    this.state.submission==null?
                                    <Text variant={'xxLarge'}> {/*Trying to give left padding, didn't work*/}
                                        Forms to submitted for licensing
                                    </Text> :
                                    <Text variant={'xxLarge'}> {/*Trying to give left padding, didn't work*/}
                                        Forms status of submission
                                    </Text> 
                                }

                                <FormList user_type="operator" history={this.props.history} submission={this.state.submission}/>
                            </>: null
                }
            </>
            
        )
    } 
}
export default roleHandler(FormCards);