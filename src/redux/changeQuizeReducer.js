import { GET_QUIZE } from "./types";

export const changeQuizeReducer = (state = [], action) => {
    switch (action.type) {
        case GET_QUIZE:
            return [...state];
        default:
            return state;
    }
};
