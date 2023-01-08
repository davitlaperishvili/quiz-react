import { CHANGE_QUIZE_PARAMS, CHANGE_DIFFICULTY } from "./types";

const initialState = { params: { difficulty: "easy" } };
export const changeQuizeParamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QUIZE_PARAMS:
            return { ...state, ...action.payload };
        case CHANGE_DIFFICULTY:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
