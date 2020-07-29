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
        const user_type = this.props.userRole.role
        return (
            <>
                {
                    user_type==="dgca"?
                        <>
                            <Text variant={'xxLarge'}> {/*Trying to give left padding, didn't work*/}
                                Forms submitted for licensing
                            </Text> 
                            <FormList user_type="dgca" submission='null'/>
                        </> :
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

                            <FormList user_type="operator" submission={this.state.submission}/>
                        </>
                }
            </>
            
        )
    } 
}
export default roleHandler(FormCards);