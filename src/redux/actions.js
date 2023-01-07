import { CHANGE_QUIZE_PARAMS, CHANGE_DIFFICULTY, CHANGE_QUIZE } from "./types";

export function changeQuizeParams(category) {
    return {
        type: CHANGE_QUIZE_PARAMS,
        payload: category,
    };
}

export function changeDifficulty(difficulty) {
    return {
        type: CHANGE_DIFFICULTY,
        payload: difficulty,
    };
}

export function changeQuize(quize) {
    return {
        type: CHANGE_QUIZE,
        payload: quize,
    };
}
