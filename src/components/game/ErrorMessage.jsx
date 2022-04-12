import React from 'react'
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  let invalidWordErr = useSelector(state=>state.invalidWordErr);
  let wordTooShortErr = useSelector(state=>state.wordTooShortErr);
  let err = invalidWordErr || wordTooShortErr;
  let message = '';
  if(wordTooShortErr) {
    message = 'Word too short!';
  }
  else if (invalidWordErr) {
    message = "Invalid word!"
  }
  return (
    <>
    {err ? <div>{message}</div> : <div><br></br></div>} 
    </>
  )
}

export default ErrorMessage