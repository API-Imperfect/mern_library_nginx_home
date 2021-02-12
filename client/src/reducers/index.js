import { combineReducers } from "redux";
import { booksListReducer } from "./bookReducers";

export default combineReducers({
   booksList: booksListReducer,
});
