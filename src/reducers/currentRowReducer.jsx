import * as actions from '../actions/actionTypes';

const currentRowReducer = (state = 0, action) => {

    switch (action.type) {
        case actions.INC_ROW:
            let newState = state + 1;
            return newState;
        case actions.RESET_ROW_COUNT:
            return 0;
        default:
            return state;
    }
};
export default currentRowReducer;