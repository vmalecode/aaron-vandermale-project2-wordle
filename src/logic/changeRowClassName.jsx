
import * as actions from "../actions";

function changeRowClassName(color) {
    
    return (dispatch, getState) => {
        const state = getState();
        let start = state.currentRow*state.boardSize.width;
        let end = (state.currentRow *state.boardSize.width) + state.boardSize.width - 1;
        dispatch(actions.changeBoxClass(start,end,color))
    }
}
export default changeRowClassName;