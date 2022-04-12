import * as actions from '../actions/actionTypes';

const keyPressReducer = (state = "", action) => {
    const str = action.payload;
    switch (action.type) {
        case actions.KEY_PRESS:
            return action.payload;
        default:
            return state;
    };
};
export default keyPressReducer;