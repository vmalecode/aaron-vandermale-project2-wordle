import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import keyPress from '../../logic/keyPress';
const Key = ({ keyIdx}) => {
  const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const dispatch = useDispatch();
  const keyCode = {key:alphabet[keyIdx].toLowerCase()};
  const keyClassNames = useSelector(state=>state.keyboardColor);
  const keyClass = keyClassNames[keyIdx]
  const click=()=> {
      dispatch(keyPress(keyCode));
      }
  return (
    <div className = {keyClass} onClick={click}>{alphabet[keyIdx]}</div>
  )
}

export default Key