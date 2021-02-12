import axios from "axios";
import {
   BOOKS_LIST_FAIL,
   BOOKS_LIST_REQUEST,
   BOOKS_LIST_SUCCESS,
   BOOK_DETAILS_FAIL,
   BOOK_DETAILS_REQUEST,
   BOOK_DETAILS_SUCCESS,
} from "./types";

export const listBooks = () => async (dispatch) => {
   try {
      dispatch({
         type: BOOKS_LIST_REQUEST,
      });
      const { data } = await axios.get("/api/v1/books");
      dispatch({
         type: BOOKS_LIST_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: BOOKS_LIST_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const listBookDetails = (id) => async (dispatch) => {
   try {
      dispatch({
         type: BOOK_DETAILS_REQUEST,
      });
      const { data } = await axios.get(`/api/v1/books/${id}`);
      dispatch({
         type: BOOK_DETAILS_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: BOOK_DETAILS_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};
