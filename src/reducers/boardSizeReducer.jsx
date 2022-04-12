import * as actions from '../actions/actionTypes';
const initialState = actions.EASY;

const boardSizeReducer = (state = initialState,action) => {
    
    switch (action.type) {
        case actions.CHANGE_DIFFUCULTY:
            return action.payload;
        default:
            return state;
    }
};
export default boardSizeReducer;