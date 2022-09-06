import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home';
import DeliverySettings from './Pages/DeliverySettings';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <Home />} />

            <Route path="/DeliverySettings" element={ <DeliverySettings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
