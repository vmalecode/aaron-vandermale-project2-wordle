
import * as actions from "../actions";

function addLetter(e) {
    return (dispatch, getState) => {
        dispatch(actions.keyPress(e.key));
        const state = getState();
        const letterCount = state.letterCount;
        const str = e.key;
        const isLetter = str.length === 1 && str.match(/[a-z]/i);
        const addLtrAction = {
            letter: e.key,
            index: letterCount
        }
        if(isLetter) {
            dispatch(actions.addLetter(addLtrAction));
            dispatch(actions.incCount());
        };
    }
}
export default addLetter;