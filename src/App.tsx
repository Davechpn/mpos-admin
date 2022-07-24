import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Button } from '@mui/material'
import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return ( 
    <div className="admin-layout">
      <Sidebar />
      <div className="main-area">
      <Topbar />
  
      </div>
    </div>
 );
}

export default App;
