import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
   return (
      <Card className="my-3 p-3 rounded">
         <Card.Body>
            <Link to={`/books/${book.slug}`}>
               <Card.Title as="div">
                  <strong>{book.title}</strong>
               </Card.Title>
            </Link>
            <Card.Subtitle className="mb-2 text-muted">
               {book.subtitle}
            </Card.Subtitle>
            <Card.Text>{book.description}</Card.Text>

            <Card.Text as="h6">ISBN {book.isbn}</Card.Text>
            <Button variant="primary">{book.author}</Button>
         </Card.Body>
      </Card>
   );
};

export default Book;