import { MantineProvider } from '@mantine/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';



function App() {


  return (
    <BrowserRouter>
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{colorScheme:'dark'}}>
      
      <AppRoutes/>
    </MantineProvider>
    </BrowserRouter>
  
  );
}

export default App;
