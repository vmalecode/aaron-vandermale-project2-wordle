
import * as actions from "../actions";

function removeLetter(e) {

    return (dispatch, getState) => {
        const state = getState();
        const letterCount = state.letterCount;
        dispatch(actions.removeLetter(letterCount - 1));
        dispatch(actions.decCount());
    }
}
export default removeLetter;