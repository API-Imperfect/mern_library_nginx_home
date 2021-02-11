import { combineReducers } from "redux";
import { booksListReducer } from "./bookReducer";

export default combineReducers({
   books: booksListReducer,
});
