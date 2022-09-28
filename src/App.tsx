import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';



function App() {
  const queryClient = new QueryClient()
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={{colorScheme:'dark'}}>
      
      <AppRoutes/>
    </MantineProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
    </BrowserRouter>
  
  );
}

export default App;
