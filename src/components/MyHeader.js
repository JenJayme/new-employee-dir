import React from "react";
import AppBar from "@material-ui/core/AppBar";
import logo from '../logo.png';

function MyHeader () {
    return (
        <div className="App">
            <AppBar position="static" className="App-header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>City of Pawnee Employee Directory</h2>
                </header>
            </AppBar>

        </div>

    )
}

export default MyHeader;

