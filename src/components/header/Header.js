import React from 'react'

//apollo
import { gql, useQuery } from '@apollo/client';

//auth
import { useUserDispatch } from "../../context/UserContext";

//ui
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const itemStyles = {
    label: { fontSize: 18 },
    icon: { color: '#d13438' },
    iconHovered: { color:'#750b1c'},
};

const menuStyles = {
    subComponentStyles: { menuItem: itemStyles },
};

function Header(props) {

    const { client, loading, data: { currentUser } } = useQuery(
        PROFILE_QUERY,
        { fetchPolicy: "network-only" }
    );
    
    
    var userDispatch = useUserDispatch();
    const _farItems = [
        {
            key: 'profile',
            iconOnly: true,
            iconProps: { 
                iconName: 'Contact',
            },
            subMenuProps: {
                styles: menuStyles,
                items: [
                  {
                    key: 'logout',
                    text: 'Logout',
                    iconProps: { iconName: 'BlockContact' },
                    onClick: () => {logout(userDispatch, props.history)},
                  },
                ]
            }
        }
    ]

    const logout = (dispatch,history) => {
        localStorage.removeItem("id_token");
        client.resetStore()
        dispatch({ type: "SIGN_OUT_SUCCESS" });
        history.push("/login");
    }

    if(currentUser) {
        return (
            <div>
                <CommandBar
                    farItems={_farItems}
                    ariaLabel="Use left and right arrow keys to navigate between commands"
                />
            </div>
        )
    }
}

export default Header

const PROFILE_QUERY = gql`
query me {
  User {
    id
  }
}
`;

