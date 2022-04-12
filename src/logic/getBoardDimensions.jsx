
import * as actions from "../actions/actionTypes";
import { changeDifficulty, setBoxArray, setWordArraySize, changeAnswer } from "../actions";
import * as words from '../words';
import resetGameState from '../logic/resetGameState';

function getBoardDimensions(param) {

      
    return (dispatch, getState) => {
      const state = getState();
      if(state.boardSize.name === param) {
        return;
      }
      let answers = words.SIX_LETTER_WORDS;

        let size = actions.EASY;

        if(param ==="easy") {
          size = actions.EASY;
          answers = words.FIVE_LETTER_WORDS;
        }

        if(param ==="medium") {
          size = actions.MEDIUM;
          answers = words.SIX_LETTER_WORDS;

        }
        
        if(param ==="hard") {
          size = actions.HARD;
          answers = words.SEVEN_LETTER_WORDS;
        }        

        dispatch(changeDifficulty(size));
        dispatch(setWordArraySize(size.height*size.width));
        dispatch(setBoxArray(size.height*size.width));
        
        const ansNum = Math.floor(Math.random()* answers.size);
        const newAnswer = Array.from(answers)[ansNum].toLowerCase();
        dispatch(resetGameState());
        dispatch(changeAnswer(newAnswer));

          return size;
    }
}
export default getBoardDimensions;