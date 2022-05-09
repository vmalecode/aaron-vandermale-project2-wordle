
import * as actions from "../actions";
import gradeWord from './grade';

function gradeRow() {

    return (dispatch, getState) => {
        const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const state = getState();
        let word = state.wordArray.slice(state.currentRow * state.boardSize.width, state.currentRow * state.boardSize.width + state.boardSize.width).join('').toLowerCase();
        let start = state.currentRow * state.boardSize.width;
        let end = (state.currentRow * state.boardSize.width) + state.boardSize.width - 1;
        let output = gradeWord(state.answer, word);
        const keyClassNames = state.keyboardColor;
        let j = 0;
        let keyBoardIdx;
        let keyColor;
        // Change game box classNames
        for (let i = start; i <= end; i++) {
            dispatch(actions.changeBoxClass(i, i, output[j]));
            j++;
        }
        // Change keyboard classNames
        j = 0
        for (let i = start; i <= end; i++) {
            keyBoardIdx = alphabet.indexOf(word[j].toUpperCase())
            if (output[j] === "greenBox") {
                dispatch(actions.changeKeyColor(keyBoardIdx, "key green"))
            }
            else if (output[j] === "yellowBox" && keyClassNames[keyBoardIdx] !== "key green") {
                dispatch(actions.changeKeyColor(keyBoardIdx, "key yellow"))
            }
            else if(keyClassNames[keyBoardIdx] !== "key green" && keyClassNames[keyBoardIdx] !== "key yellow"){
                dispatch(actions.changeKeyColor(keyBoardIdx, "key grey"))
            }
            j++;
        }
        let correctLetters = output.filter(className => className === "greenBox").length;
        if (correctLetters === state.boardSize.width) {
            dispatch(actions.setGameOver());
            dispatch(actions.setWinCondition());
        }
    }
}
export default gradeRow;