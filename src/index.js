import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';
import '@fontsource/source-sans-pro';
import '@fontsource/open-sans';
import '@fontsource/roboto';
import '@fontsource/poppins';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

