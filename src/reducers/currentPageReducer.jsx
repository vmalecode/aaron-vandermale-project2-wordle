import * as actions from '../actions/actionTypes';

const initialState = "home"

const currentPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_DIFFUCULTY:
            return state;
        default:
            return state;
    }
};
export default currentPageReducer;