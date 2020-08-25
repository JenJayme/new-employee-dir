import React from 'react';
import logo from './logo.png';
import './App.css';
import Box from '@material-ui/core/Box';
import EmployeeTable from './components/table';
import Searchbar from './components/Searchbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>City of Pawnee Employee Directory</h2>
      </header>
      <Box className="mainDiv">
        <EmployeeTable/>
      </Box>
    </div>
  );
}

export default App;
