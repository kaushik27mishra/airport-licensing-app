import React from 'react'
import { UserRoleConsumer } from '../context/UserRoleContext'

const roleHandler = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return (<UserRoleConsumer>
                {
                    (role)=> {
                        return <NewComponent role={role}/> 
                    }
                }
            </UserRoleConsumer>)
        }
    }
    return NewComponent;
}

export default roleHandler;