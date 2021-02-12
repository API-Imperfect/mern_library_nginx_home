import axios from "axios";
import {
    BOOKS_LIST_FAIL,BOOKS_LIST_REQUEST,BOOKS_LIST_SUCCESS
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
