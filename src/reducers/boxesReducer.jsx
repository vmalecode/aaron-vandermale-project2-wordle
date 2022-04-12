import * as actions from '../actions/actionTypes'
const initialBoxNum = actions.EASY.height * actions.EASY.width;

function createBoxArray(initialBoxNum) {
    let boxes = [];
    let box;
    for(let i = 0; i < initialBoxNum; i++) {
        box = {
            index: i,
            className: "letterBox",
        }
        boxes.push(box);
    }
    return boxes;
}


const initialState = createBoxArray(initialBoxNum);
const boxesReducer = (state = initialState,action) => {

    switch (action.type) {
        case actions.RESET_BOX_COLOR:
            const reset = [...state];
            for (let i in reset) {
                let currentBox = reset[i];
                if(i >= action.payload.start && i <= action.payload.end) {
                    currentBox.className = 'letterBox';
                }
            }
            return reset;
        case actions.CHANGE_BOX_CLASSNAME_IN_RANGE:
            const newState = [...state];
            for(let i = action.payload.start; i <= action.payload.end; i++) {
                newState[i].className = action.payload.className;
            }
            return newState;
        case actions.SET_BOX_ARRAY:
            return createBoxArray(action.payload.size)
        default:
            return state;
    }


};

export default boxesReducer;