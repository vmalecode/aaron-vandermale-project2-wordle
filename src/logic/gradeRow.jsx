
import * as actions from "../actions";
import gradeWord from './grade';

function gradeRow() {
    
    return (dispatch, getState) => {
        const state = getState();
        let word = state.wordArray.slice(state.currentRow*state.boardSize.width,state.currentRow*state.boardSize.width + state.boardSize.width).join('').toLowerCase();
        let start = state.currentRow*state.boardSize.width;
        let end = (state.currentRow *state.boardSize.width) + state.boardSize.width - 1;
        let output = gradeWord(state.answer,word);
        
        
        let j = 0;
        for(let i = start; i <=end; i++) {
            dispatch(actions.changeBoxClass(i,i,output[j]));
            j++;
        }
        let correctLetters = output.filter(className => className === "greenBox").length;
        if(correctLetters===state.boardSize.width) {
            dispatch(actions.setGameOver());
            dispatch(actions.setWinCondition());
        }   
    }
}
export default gradeRow;