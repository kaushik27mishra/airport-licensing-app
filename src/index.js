import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from "./context/UserContext";
import App from './App';
import { Fabric } from '@fluentui/react'
import * as serviceWorker from './serviceWorker'; 

ReactDOM.render(
  <Fabric>
    <UserProvider>
        <App />
    </UserProvider>
  </Fabric>,
  document.getElementById('root')
);

serviceWorker.unregister();
