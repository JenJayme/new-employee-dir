import React from 'react';
import logo from './logo.png';
import './App.css';
import Box from '@material-ui/core/Box';
import EmployeeTable from './components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>City of Pawnee Employee Directory</h2>
      </header>
      <Box>
        <h5>Box in app.js starts here</h5>
        <EmployeeTable />
      </Box>
    </div>
  );
}

export default App;
