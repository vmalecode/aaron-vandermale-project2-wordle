import * as actions from './actionTypes';
export const changeDifficulty = (num) => {
    return {
        type: actions.CHANGE_DIFFUCULTY,
        payload: num
    };
};
export const clearInvalidWordErr = (start,end) => {
    return {
        type: actions.CLEAR_INVALID_WORD_ERR,
        payload: {
            start:start,
            end: end,
        }
    };
};
export const resetWinCondition = () => {
    return {
        type: actions.RESET_SET_WIN_CONDITION,
    };
};
export const setWinCondition = () => {
    return {
        type: actions.SET_WIN_CONDITION,
    };
};
export const setGameStart = () => {
    return {
        type: actions.SET_GAME_START,
    };
};
export const setGameOver = () => {
    return {
        type: actions.SET_GAME_OVER,
    };
};
export const resetRowCount = () => {
    return {
        type: actions.RESET_ROW_COUNT,
    };
};
export const resetLetterCount = () => {
    return {
        type: actions.RESET_LETTER_COUNT,
    };
};
export const setBoxArray = (size) => {
    return {
        type: actions.SET_BOX_ARRAY,
        payload: {
            size: size
        }
    };
};
export const changeAnswer = (newAnswer) => {
    return {
        type: actions.CHANGE_ANSWER,
        payload: newAnswer
    };
};
export const setWordArraySize = (size) => {
    return {
        type: actions.SET_WORD_ARRAY_SIZE,
        payload: {
            size: size
        }
    };
};
export const changePage = (page) => {
    return {
        type: actions.CHANGE_PAGE,
        payload: {
            page: page
        }
    };
};

export const invalidWordErr = () => {
    return {
        type: actions.INVALID_WORD_ERR,
    };
};
export const wordTooShortErr = () => {
    return {
        type: actions.TOO_SHORT_ERR,
    };
};
// RESET_BOX_COLOR
export const resetBoxes = () => {
    return {
        type: actions.RESET_BOX_COLOR,
    };
};
export const changeBoxClass = (start,end,className) => {
    return {
        type: actions.CHANGE_BOX_CLASSNAME_IN_RANGE,
        payload: {
        start: start,
        end: end,
        className: className,}
    };
};
export const clearWordTooShortErr = () => {
    return {
        type: actions.CLEAR_TOO_SHORT_ERR,
    };
};
export const incRow = () => {
    return {
        type: actions.INC_ROW,
    };
};
export const block = () => {
    return {
        type: actions.BLOCK_INPUT,
    };
};
export const unblock = () => {
    return {
        type: actions.UNBLOCK_INPUT,
    };
};
export const keyPress = (e) => {
    return {
        type: actions.KEY_PRESS,
        payload: e
    };
};
export const addLetter = (e) => {
    return {
        type: actions.ADD_LETTER,
        payload: e
    };
};
export const removeLetter = (e) => {
    return {
        type: actions.REMOVE_LETTER,
        payload: e
    };
};
export const incCount = () => {
    return {
        type: actions.INC_COUNT,
    }
}
export const decCount = () => {
    return {
        type: actions.DEC_COUNT,
    }
}