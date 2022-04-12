import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import resetGameState from '../../logic/resetGameState';
import '../../styles/endGame.css'; 
const EndGameMessage = () => {
  const dispatch = useDispatch();

  const buttonClick=(e)=> {
      console.log("ButtonClick:", e);
      if(e.clientX + e.clientY === 0) {
          return;
      }
      dispatch(resetGameState());
      }
    let winCondition = useSelector(state=>state.winCondition);
    let gameOver = useSelector(state=>state.gameOver);
    let message = '';
    let answer = useSelector(state=>state.answer);
  if(winCondition) {
    message = 'Congratulations! you\'ve won!';
  }
  else if (!winCondition) {
    message = "Game over. Correct word was: ";
  }
  return (
    <>
        {gameOver ? <div className = 'messageContainer'>{message}{winCondition ? '': <span className = "answer">{answer}</span>}</div> : ''}
        {gameOver ? <Link to='#' onClick={buttonClick}><button className="button"><span>Play Again? </span></button></Link> : ''}
        
        
    </>
  )
}

export default EndGameMessage