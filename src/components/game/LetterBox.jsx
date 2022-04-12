import React from 'react'
import {useSelector} from 'react-redux';

function LetterBox({row,column}) {
  const wordLength = useSelector(state=>state.boardSize.width);
  const letter = useSelector(state=>state.wordArray[wordLength*row + column]);
  const box = useSelector(state=>state.boxes[wordLength*row + column]);

  return (
    <div className = {box.className}>{letter}</div>
  )
}

export default LetterBox