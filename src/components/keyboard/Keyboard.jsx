
import React from 'react'
import KeyboardRow from './KeyboardRow';
import '../../styles/keyboard.css';
import Backspace from './Backspace';
import Enter from './Enter';
const Keyboard = () => {
    return (
        <div className = 'keyboard'>
            <div className="keyboardrow"> <KeyboardRow length = {10} offset = {0}/></div>
            <div className="keyboardrow"> <KeyboardRow length = {9} offset = {10}/><Backspace /></div>
            <div className="keyboardrow"> <KeyboardRow length = {7} offset = {19}/><Enter /></div>
        </div>
      )
}

export default Keyboard
