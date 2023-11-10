import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
