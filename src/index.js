import React from 'react';
import ReactDOM from 'react-dom';


//components
import App from './App';

//context
import { UserProvider } from "./context/UserContext";

//ui
import { Fabric } from '@fluentui/react'
import { initializeIcons } from '@uifabric/icons';

//apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/react-hooks'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from "apollo-link-context";

import * as serviceWorker from './serviceWorker';
import { UserRoleProvider } from './context/UserRoleContext';

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_BACKENDURL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache()
});

//icons
initializeIcons();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Fabric>
      <UserProvider>
        <UserRoleProvider>          
          <App />
        </UserRoleProvider>
      </UserProvider>
    </Fabric>
  </ApolloProvider>
,
  document.getElementById('root')
);

serviceWorker.unregister();
