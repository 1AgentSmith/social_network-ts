import React from 'react';
import './App.css';
import Header_logo from './images/header_logo/Header_logo.png'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
