import React from 'react'
import Navbar from './Navbar'
import '../styles/instructions.css'; 
const Instructions = () => {
    
  return (
    <>
    <div className="game">
        <Navbar />
    </div>
    <div className = "instructions">
        <ul>
            <li>Try to guess the correct word!</li>
            <li><span className = 'green'>Green boxes </span>indicate a letter in the correct position!</li>
            <li><span className = 'yellow'>Yellow boxes </span> indicate the letter is present in the word, but in another position.</li>
            <li>A <span className = 'grey'>Grey box </span> means the letter is not in the word.</li>
        </ul>
    </div>

    <div className="game">
        <div className="row"><div className="greyBox">R</div><div className="greenBox">E</div><div className="greyBox">D</div><div className="greyBox">U</div><div className="greyBox">X</div></div>
        <div className="row"><div className="greyBox">R</div><div className="greenBox">E</div><div className="greenBox">A</div><div className="greyBox">C</div><div className="greyBox">T</div></div>
        <div className="row"><div className="yellowBox">S</div><div className="greyBox">T</div><div className="greenBox">A</div><div className="greyBox">T</div><div className="greenBox">E</div></div>
        <div className="row"><div className="greenBox">L</div><div className="greenBox">E</div><div className="greenBox">A</div><div className="greenBox">S</div><div className="greenBox">E</div></div>
    </div>
    <div className = "instructions">
        <ul>
        <li>In this example, the correct word is: 
            <span className = 'green'>L </span>
            <span className = 'green'>E </span>
            <span className = 'green'>A </span>
            <span className = 'green'>S </span>
            <span className = 'green'>E </span>
            !!!</li>
        </ul>
    </div>
    </>
  )
}

export default Instructions

