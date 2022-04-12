import React from 'react'
import Key from './Key';
import '../../styles/keyboard.css';
const Row = ({length,offset}) => {
    return <>{
    [...Array(length)].map((e, i) => {
        return <Key keyIdx= {offset + i} idx = {i} />
      })
    }</>
}

export default Row