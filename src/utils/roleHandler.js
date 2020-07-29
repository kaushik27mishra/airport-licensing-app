import React from 'react'
import { UserRole } from '../context/UserRoleContext'

export function roleHandler(Component) {
    return function RoleComponent(props){
        return(
            <UserRole.Consumer>
                {(contexts) => 
                    {   
                        return <Component {...props} {...contexts} />
                    }
                }
            </UserRole.Consumer>
        )
    }
}