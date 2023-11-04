import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BookList from "./components/BookList";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="book book-app">Books</h1>
      <BookList />
    </div>
  </Provider>
);

export default App;
