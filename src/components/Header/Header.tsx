import React from 'react';
import Header_logo from '../images/header_logo/Header_logo.png';
import h from './Header.module.css'

const Header = () => {
    return(
        <header className={h.header}>
            <img src={Header_logo} alt=""/>
        </header>
    )
}
export default Header