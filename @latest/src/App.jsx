import { useEffect, useState } from 'react';
import axios from 'axios';
import API from './assets/Componentes/API';
import './App.css'


function App() {
  
  return (
    <div className="App">
      <h1>API</h1>
      <API />
    </div>
  )
}

export default App;
