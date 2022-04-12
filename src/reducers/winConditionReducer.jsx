import * as actions from '../actions/actionTypes';

const winConditionReducer = (state = false, action) => {
    switch (action.type) {
        case actions.SET_WIN_CONDITION:
            return true;
        case actions.RESET_SET_WIN_CONDITION:
            return false;
        default:
            return state;
    }
};
export default winConditionReducer;