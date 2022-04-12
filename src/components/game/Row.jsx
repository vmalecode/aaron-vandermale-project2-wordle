import React from 'react'
import {useSelector} from 'react-redux';
import LetterBox from './LetterBox';

const Row = ({row}) => {
    const RowLength = useSelector(state=>state.boardSize.width);
    return <div className = 'row'>{
    [...Array(RowLength)].map((e, i) => {
        return <LetterBox key= {i} row = {row} column = {i} />
      })
    }</div>

}

export default Row