import React from 'react'

//auth
import { useUserDispatch, signOut } from "../../context/UserContext";

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
                    onClick: () => signOut(userDispatch, props.history),
                  },
                ]
            }
        }
    ]

    return (
        <div>
            <CommandBar
                farItems={_farItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
            />
        </div>
    )
}

export default Header

