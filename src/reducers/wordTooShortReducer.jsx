import * as actions from '../actions/actionTypes';

const wordTooShortReducer = (state = false, action) => {
    switch (action.type) {
        case actions.TOO_SHORT_ERR:
            return true;
        case actions.CLEAR_TOO_SHORT_ERR:
            return false;
        default:
            return state;
    }
};
export default wordTooShortReducer;