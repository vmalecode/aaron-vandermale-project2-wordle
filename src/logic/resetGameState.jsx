
import * as actions from "../actions";
import * as words from '../words';
import { changeAnswer } from "../actions";

function resetGameState() {
    
    return (dispatch, getState) => {
        console.log("[resetGameState]");
        const state = getState();
        dispatch(actions.setWordArraySize(state.boardSize.height*state.boardSize.width));
        dispatch(actions.setBoxArray(state.boardSize.height*state.boardSize.width));
        dispatch(actions.resetLetterCount());
        dispatch(actions.resetRowCount());
        dispatch(actions.setGameStart());
        dispatch(actions.resetWinCondition());
        dispatch(actions.clearInvalidWordErr());
        dispatch(actions.clearWordTooShortErr());
        let answers = words.FIVE_LETTER_WORDS;
        const param = state.boardSize.name;
        if(param ==="easy") {
            answers = words.FIVE_LETTER_WORDS;
        }
        if(param ==="medium") {
            answers = words.SIX_LETTER_WORDS;
        }
        if(param ==="hard") {
            answers = words.SEVEN_LETTER_WORDS;
        }
          const ansNum = Math.floor(Math.random()* answers.size);
          const newAnswer = Array.from(answers)[ansNum].toLowerCase();
          dispatch(changeAnswer(newAnswer));     
    }
}
export default resetGameState;