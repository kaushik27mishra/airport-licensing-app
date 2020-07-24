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
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'http://4f1a7909e98e.ngrok.io',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//icons
initializeIcons();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Fabric>
      <UserProvider>
          <App />
      </UserProvider>
    </Fabric>
  </ApolloProvider>
,
  document.getElementById('root')
);

serviceWorker.unregister();
