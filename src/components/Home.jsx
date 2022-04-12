import React from 'react'
import '../styles/home.css'; 
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import resetGameState from '../logic/resetGameState';
const Home = () => {
  const dispatch = useDispatch();
  const buttonClick=()=> {
    console.log("ButtonClick")
    dispatch(resetGameState());
  }
  return (
    <div>
    <h1 className = 'title'>{"{"}not{"}"} <em>Wordle</em></h1>
    <div className = 'mainMenu'>
      <ul>
        <li><Link to='/instructions' onClick={buttonClick}>How To Play</Link></li>
        <li><Link to='/game/easy' onClick={buttonClick}>Easy Game</Link></li>
        <li><Link to='/game/medium' onClick={buttonClick}>Medium Game</Link></li>
        <li><Link to='/game/hard' onClick={buttonClick}>Hard Game</Link></li>
      </ul>
    </div>

    </div>
    )
}

export default Home