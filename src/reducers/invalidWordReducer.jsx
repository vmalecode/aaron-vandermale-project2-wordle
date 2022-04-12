import * as actions from '../actions/actionTypes';

const invalidWordReducer = (state = false, action) => {
    switch (action.type) {
        case actions.INVALID_WORD_ERR:
            return true;
        case actions.CLEAR_INVALID_WORD_ERR:
            return false;
        default:
            return state;
    }
};
export default invalidWordReducer;