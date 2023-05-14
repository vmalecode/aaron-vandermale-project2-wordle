import React from 'react'
import Navbar from './Navbar'
import '../styles/instructions.css';
const Instructions = () => {

    return (
        <>
            <div className="game">
                <Navbar />
            </div>
            <div className="instructions">
                <ul>
                    <li>Try to guess the correct word!</li>
                    <li><span className='green'>Green boxes </span>indicate a letter in the correct position!</li>
                    <li><span className='yellow'>Yellow boxes </span> indicate the letter is present in the word, but in another position.</li>
                    <li>A <span className=' '>Grey box </span> means the letter is not in the word.</li>
                </ul>
            </div>

            <div className="game">
                <div className="row"><div className="letterBox grey">R</div><div className="letterBox green">E</div><div className="letterBox grey">D</div><div className="letterBox grey">U</div><div className="letterBox grey">X</div></div>
                <div className="row"><div className="letterBox grey">R</div><div className="letterBox green">E</div><div className="letterBox green">A</div><div className="letterBox grey">C</div><div className="letterBox grey">T</div></div>
                <div className="row"><div className="letterBox yellow">S</div><div className="letterBox grey">T</div><div className="letterBox green">A</div><div className="letterBox grey">T</div><div className="letterBox green">E</div></div>
                <div className="row"><div className="letterBox green">L</div><div className="letterBox green">E</div><div className="letterBox green">A</div><div className="letterBox green">S</div><div className="letterBox green">E</div></div>
            </div>
            <div className="instructions">
                <ul>
                    <li>In this example, the correct word is:
                        <span className='green'>L </span>
                        <span className='green'>E </span>
                        <span className='green'>A </span>
                        <span className='green'>S </span>
                        <span className='green'>E </span>
                        !!!</li>
                </ul>
            </div>
        </>
    )
}

export default Instructions

