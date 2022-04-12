import * as actions from '../actions/actionTypes';
const letterCountReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INC_COUNT:
        return ++state;
    case actions.DEC_COUNT:
        return --state;
    case actions.RESET_LETTER_COUNT:
      return 0;
    default:
        return state;
  }
}
export default letterCountReducer;