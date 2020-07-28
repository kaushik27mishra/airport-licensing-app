import React from 'react';

const UserRole = React.createContext()

const UserRoleProvider = UserRole.Provider
const UserRoleConsumer = UserRole.Consumer

export { UserRoleConsumer , UserRoleProvider };