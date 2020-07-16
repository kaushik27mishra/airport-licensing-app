import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

//context
import { UserProvider } from "./context/UserContext";

//ui
import { Fabric } from '@fluentui/react'

//apollo
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://4b9b6fd4f94b.ngrok.io',
  cache: new InMemoryCache()
});

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
