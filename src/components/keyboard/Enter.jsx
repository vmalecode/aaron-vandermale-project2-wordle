import React from 'react'
import { AiOutlineEnter } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import keyPress from '../../logic/keyPress';

const Enter = () => {
  const keyCode = {key:'Enter'};
  const dispatch = useDispatch();
  const click=()=> {
      dispatch(keyPress(keyCode));
      }
  return (
    <div className = 'enter' onClick={click}><AiOutlineEnter /></div>
  )
}

export default Enter