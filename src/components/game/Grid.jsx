
import React from 'react'
import {useSelector} from 'react-redux';
import Row from './Row';
const Grid = () => {
    const size = useSelector(state=>state.boardSize.height);
    useSelector(state=>state.boxes);
    return <>{
    [...Array(size)].map((e, i) => {
        return <Row key={i} row={i} />
      })
    }</>
}

export default Grid