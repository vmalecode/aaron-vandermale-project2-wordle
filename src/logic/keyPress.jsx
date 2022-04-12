import * as actions from "../actions";
import addLetter from './addLetter';
import removeLetter from "./removeLetter";
import * as words from "../words";
import rowErrHandler from "./rowErrHandler";
import changeRowClassName from "./changeRowClassName";
import gradeRow from "./gradeRow";
// Entry point for a keyboard event:
function handleKeyPress(e) {
    return (dispatch, getState) => {
        let state = getState();
        if(state.gameOver) {
            return;
        }
        // Clear errors after any Keypress:
        dispatch(actions.clearWordTooShortErr());
        dispatch(actions.clearInvalidWordErr(state.currentRow));
        dispatch(changeRowClassName("letterBox"));        
        const isBackSpace = e.key === "Backspace";
        console.log("keyPress", e)
        let word = state.wordArray.slice(state.currentRow*state.boardSize.width,state.currentRow*state.boardSize.width + state.boardSize.width).join('').toLowerCase();
        const isEndOfLine = word.length === state.boardSize.width;
        const lineNum = Math.floor(state.letterCount / state.boardSize.width);
        dispatch(actions.keyPress(e.key));
        const letterCount = getState().letterCount;
        if(e.key === "Enter") {
            let validWord = words.VALID_WORDS.has(word.toLowerCase());
            if(!isEndOfLine) {
                dispatch(rowErrHandler());
                dispatch(actions.wordTooShortErr());
            }
            else if (!validWord) {
                dispatch(rowErrHandler())
                dispatch(actions.invalidWordErr());
            }
            
            if(isEndOfLine && validWord) {
                dispatch(gradeRow());
                dispatch(actions.incRow());
                if(state.currentRow === state.boardSize.height - 1) {
                    dispatch(actions.setGameOver());
                }
            }
        }
        if(lineNum === state.currentRow) {
            dispatch(addLetter(e));
        }
        if(isBackSpace && word.length > 0) {
            dispatch(removeLetter());
        }
    }
}
export default handleKeyPress;