import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../actions/bookActions";
import Book from "../components/Book";
import Loader from "../components/Loader";
import Message from "../components/Message";

const BooksListPage = () => {
   const dispatch = useDispatch();
   const booksList = useSelector((state) => state.booksList);
   const { loading, error, books } = booksList;

   useEffect(() => {
      dispatch(listBooks());
   }, [dispatch]);

   return (
      <>
         <h1>The Books in My Library</h1>
         {loading ? (
            <Loader />
         ) : error ? (
            <Message variant="danger">{error}</Message>
         ) : (
            <>
               <Row>
                  {books.map((book) => (
                     <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
                        <Book book={book} />
                     </Col>
                  ))}
               </Row>
            </>
         )}
      </>
   );
};

export default BooksListPage;
