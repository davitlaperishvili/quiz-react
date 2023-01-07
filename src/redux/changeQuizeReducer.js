import { CHANGE_QUIZE } from "./types";

export const changeQuizeReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_QUIZE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
