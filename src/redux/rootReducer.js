import { combineReducers } from "redux";
import { changeQuizeReducer } from "./changeQuizeReducer";
export const rootReducer = combineReducers({
    quize: changeQuizeReducer,
});
