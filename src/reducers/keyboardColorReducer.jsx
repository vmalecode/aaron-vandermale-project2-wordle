import * as actions from '../actions/actionTypes';

const initialState = Array(26).fill("key");

const keyboardColorReducer = (state = initialState, action) => {
  switch(action.type) {
        case actions.CHANGE_KEY_COLOR:
          const newState = [...state];
          newState[action.payload.index] = action.payload.keyClassName;
          return newState;
        case actions.RESET_KEYBOARD:
          return Array(26).fill("key")
        default:
            return state;
  }
}

export default keyboardColorReducer