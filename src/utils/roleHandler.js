import React from 'react'
import { UserRoleConsumer } from '../context/UserRoleContext'

function roleHandler(Component) {
    return (
        <UserRoleConsumer>
            {(contexts) => <Component role={contexts} />}
        </UserRoleConsumer>
    )
}

export default roleHandler;