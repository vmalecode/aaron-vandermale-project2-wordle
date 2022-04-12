import * as actions from '../actions/actionTypes';
import * as words from '../words';

const initialNum = Math.floor(Math.random()* words.FIVE_LETTER_WORDS.size);
const initialState = Array.from(words.FIVE_LETTER_WORDS)[initialNum];

const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_ANSWER:
            return action.payload;
        default:
            return state;
    }
};
export default answerReducer;