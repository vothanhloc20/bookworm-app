import { combineReducers } from "redux";
import filter from "./filter.reducer.js";
import home from "./home.reducer.js";
import modal from "./modal.reducer.js";

const rootReducer = combineReducers({
    modal,
    filter,
    home,
});

export default rootReducer;
