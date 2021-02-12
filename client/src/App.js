import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookPage from "./pages/BookPage";
import BooksListPage from "./pages/BooksListPage";
import HomePage from "./pages/HomePage";

const App = () => {
   return (
      <Router>
         <Header />
         <main className="py-3">
            <Container>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/books" component={BooksListPage} />
               <Route exact path="/books/:id" component={BookPage} />
            </Container>
         </main>
         <Footer />
      </Router>
   );
};
export default App;
