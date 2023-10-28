import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

import BookList from "./components/BookList";

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h1>Error...</h1>} />
      </Routes>
    </div>
  </Router>
);

export default App;
