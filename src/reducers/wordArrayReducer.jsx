import * as actions from '../actions/actionTypes';

const initialState = Array(actions.EASY.width*actions.EASY.height).fill("");

const wordArrayReducer = (state = initialState, action) => {
  switch(action.type) {
        case actions.ADD_LETTER:
          const newState = [...state];
          newState[action.payload.index] = action.payload.letter.toUpperCase();
          return newState;
        case actions.REMOVE_LETTER:
            const newState1 = [...state];
            newState1[action.payload] = "";
            return newState1;
        case actions.SET_WORD_ARRAY_SIZE:
          return Array(action.payload.size).fill("")
        default:
            return state;
  }
}

export default wordArrayReducer