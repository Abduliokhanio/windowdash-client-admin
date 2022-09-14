import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/Home';
import DeliverySettings from './Pages/DeliverySettings';
import Menu from './Pages/Menu';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <Home />} />

            <Route path="/DeliverySettings" element={ <DeliverySettings />} />
            <Route path="/Menu" element={ <Menu />} />

            <Route path="Menu/Category/:id/edit" element={ <Menu />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
