import { combineReducers } from "redux";
import {
   bookCreateReducer,
   bookDeleteReducer,
   bookDetailsReducer,
   booksListReducer,
} from "./bookReducers";

export default combineReducers({
   booksList: booksListReducer,
   bookDetails: bookDetailsReducer,
   bookCreate: bookCreateReducer,
   bookDelete: bookDeleteReducer,
});
