import { combineReducers } from "redux";
import modal from "./modal.reducer.js";

const rootReducer = combineReducers({
    modal,
});

export default rootReducer;
