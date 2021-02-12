import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BooksList from "./pages/BooksListPage";
import HomePage from "./pages/HomePage";

const App = () => {
   return (
      <Router>
         <Header />
         <main className="py-3">
            <Container>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/books" component={BooksList} />
            </Container>
         </main>
         <Footer />
      </Router>
   );
};
export default App;