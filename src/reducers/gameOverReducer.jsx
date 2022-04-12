import * as actions from '../actions/actionTypes';

const gameOverReducer = (state = false, action) => {
    switch (action.type) {
        case actions.SET_GAME_OVER:
            return true;
        case actions.SET_GAME_START:
            return false;
        default:
            return state;
    }
};
export default gameOverReducer;