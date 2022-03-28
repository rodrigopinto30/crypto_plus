import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Auth0Provider 
        domain={'dev-qmbsopmk.us.auth0.com'} 
        clientId={'SiP5K0tIndBGXTxKsY8xU5mLsQHBPY9e'} 
        redirectUri={window.location.origin}  
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


/**
 *  NodeJS
 *  Typescript
 *  ReactJS
 *  AuthO
 *  ReactDOM
 *  API - CoinMarketCap
 *  Chakra-UI
 *  Axios
 */