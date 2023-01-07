import { combineReducers } from "redux";
import { changeQuizeParamsReducer } from "./changeQuizeParamsReducer";
import { changeQuizeReducer } from "./changeQuizeReducer";
export const rootReducer = combineReducers({
    quizeParams: changeQuizeParamsReducer,
    quize: changeQuizeReducer,
});
