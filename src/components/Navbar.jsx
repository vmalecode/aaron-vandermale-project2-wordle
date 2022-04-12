import React from 'react'
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const buttonClick=(e)=> {
        console.log("ButtonClick:", e);
        if(e.clientX + e.clientY === 0) {
            return;
        }
    }

  return (
    <div className="navbarWrapper">
    <div className="navbarTitle"><h1>{"{"}not{"}"} <em>Wordle</em></h1></div>
    <nav className="navbar">
        <ul>
            <li><Link to='/instructions' onClick={buttonClick}>How To Play</Link></li>
            <li><Link to='/game/easy' onClick={buttonClick}>Easy Game</Link></li>
            <li><Link to='/game/medium' onClick={buttonClick}>Medium Game</Link></li>
            <li><Link to='/game/hard' onClick={buttonClick}>Hard Game</Link></li>
        </ul>
    </nav>
</div>
  )
}

export default Navbar