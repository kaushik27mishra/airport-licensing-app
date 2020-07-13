import React from 'react';
import ReactDOM from 'react-dom';

//components
import App from './App';

//context
import { UserProvider } from "./context/UserContext";

//ui
import { Fabric } from '@fluentui/react'

//apollo
import {ApolloProvider, createNetworkInterace, ApolloClient} from 'react-apollo'

import * as serviceWorker from './serviceWorker';

const networkInterface = createNetworkInterace({
  uri: 'https://4b9b6fd4f94b.ngrok.io/'
})

const client = new ApolloClient({
  networkInterface
})

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
