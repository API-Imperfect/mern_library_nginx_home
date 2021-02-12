import {
   BOOKS_LIST_FAIL,
   BOOKS_LIST_REQUEST,
   BOOKS_LIST_SUCCESS,
   BOOK_DETAILS_FAIL,
   BOOK_DETAILS_REQUEST,
   BOOK_DETAILS_SUCCESS,
} from "../actions/types";

export const booksListReducer = (state = { books: [] }, action) => {
   switch (action.type) {
      case BOOKS_LIST_REQUEST:
         return { loading: true, books: [] };
      case BOOKS_LIST_SUCCESS:
         return { loading: false, books: action.payload };
      case BOOKS_LIST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const bookDetailsReducer = (state = { book: {} }, action) => {
   switch (action.type) {
      case BOOK_DETAILS_REQUEST:
         return { ...state, loading: true };
      case BOOK_DETAILS_SUCCESS:
         return { loading: false, book: action.payload };
      case BOOK_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
