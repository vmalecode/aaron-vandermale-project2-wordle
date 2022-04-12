import React from 'react'
import Grid from './Grid';
import { useDispatch } from 'react-redux';
import handleKeyPress from '../../logic/keyPress';
import ErrorMessage from './ErrorMessage';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import getBoardDimensions from '../../logic/getBoardDimensions';
import EndGameMessage from './EndGameMessage';
import Navbar from '../Navbar';
import Keyboard from '../keyboard/Keyboard';
const Game = () => {
    const dispatch = useDispatch();
    const onKeyDown = (e,v) => {
      dispatch(handleKeyPress(e));
    };
    document.onkeydown = onKeyDown;
    const {difficulty} = useParams();
    dispatch(getBoardDimensions(difficulty));
    return (
      <div className="App">
        <div className="game">
          <Navbar />
          <ErrorMessage />
          <EndGameMessage />
          <Grid />
          <Keyboard />
        </div>
      </div>
    );
  }

export default Game