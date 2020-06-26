import React from 'react'

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
                onClick: () => console.log('Share'),
              },
            ]
        }
    }
]

function Header(props) {
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
