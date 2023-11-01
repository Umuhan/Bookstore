import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BookList from "./components/BookList";
import NewBooks from "./components/NewBooks";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Book List</h1>
      <BookList />
      <NewBooks />
    </div>
  </Provider>
);

export default App;
