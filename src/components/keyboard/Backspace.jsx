import React from 'react'
import { FaBackspace } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import keyPress from '../../logic/keyPress';

const Backspace = () => {
  const keyCode = {key:'Backspace'};
  const dispatch = useDispatch();

  const click=()=> {
    dispatch(keyPress(keyCode));
    }

  return (
    <div className = 'backspace' onClick={click}><FaBackspace /></div>
  )
}

export default Backspace