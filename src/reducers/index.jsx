import { combineReducers } from "redux"
import boardSizeReducer from "./boardSizeReducer";
import keyPressReducer from "./keyPressReducer";
import letterCountReducer from "./letterCountReducer";
import wordArrayReducer from "./wordArrayReducer";
import boxesReducer from "./boxesReducer";
import currentRowReducer from "./currentRowReducer";
import wordTooShortReducer from "./wordTooShortReducer";
import invalidWordReducer from "./invalidWordReducer";
import answerReducer from "./answerReducer";
import currentPageReducer from "./currentPageReducer";
import gameOverReducer from "./gameOverReducer";
import winConditionReducer from "./winConditionReducer";
import keyboardColorReducer from "./keyboardColorReducer";

const allReducer = combineReducers({
    keyPress : keyPressReducer,
    boardSize : boardSizeReducer,
    wordArray : wordArrayReducer,
    letterCount : letterCountReducer,
    gameOver : gameOverReducer,
    boxes : boxesReducer,
    currentRow: currentRowReducer,
    wordTooShortErr: wordTooShortReducer,
    invalidWordErr : invalidWordReducer,
    answer : answerReducer,
    page: currentPageReducer,
    winCondition: winConditionReducer,   
    keyboardColor: keyboardColorReducer,
});

export default allReducer;