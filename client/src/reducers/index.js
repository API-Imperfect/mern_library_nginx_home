import { combineReducers } from "redux";
import { bookDetailsReducer, booksListReducer } from "./bookReducers";

export default combineReducers({
   booksList: booksListReducer,
   bookDetails: bookDetailsReducer,
});
