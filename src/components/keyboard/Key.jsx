import React from 'react'
import { useDispatch } from 'react-redux';
import keyPress from '../../logic/keyPress';
const Key = ({ keyIdx}) => {
  const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const dispatch = useDispatch();
  const keyCode = {key:alphabet[keyIdx].toLowerCase()};
  const click=()=> {
      dispatch(keyPress(keyCode));
      }
  return (
    <div className = 'key' onClick={click}>{alphabet[keyIdx]}</div>
  )
}

export default Key