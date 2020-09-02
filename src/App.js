import React, {useState} from 'react';
import './App.css';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';

export const categoryContext = createContext()

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <categoryContext.Provider value={[category, setCategory]}>
      <p> From app js: {category}</p>
     <Headers></Headers>
      <Home></Home>
      <Shipment></Shipment>
    </categoryContext.Provider>
  );
}

export default App;
