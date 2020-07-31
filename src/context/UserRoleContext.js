import React, { Component } from 'react'
import gql from 'graphql-tag';
import { client } from '../index'

export const UserRole = React.createContext(
    {
        userRole: {
            role: null,
            id: null
        }
    }
)
 
class UserRoleProvider extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
             role:"",
             id:""
            }
        }
        
    componentDidMount() {
        if(localStorage.getItem('id_token')) {
            client.query({
                query: gql`
                { 
                    me {
                        id
                        role
                    }
                }
                `
            }).then(response => 
                this.setState({
                    id: response.data.me.id,
                    role: response.data.me.role
                })
            ).catch(error => {
                console.log(error);
                // localStorage.removeItem("id_token");

            })
        }
    }
    

    render() {
        return (
            <UserRole.Provider value={{ 
                userRole : {
                    ...this.state
                }
             }}>
                {this.props.children}    
            </UserRole.Provider>
        )
    }
}


export { UserRoleProvider };