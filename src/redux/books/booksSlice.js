/* eslint-disable */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oxSnZQVaQ1G1l7bL7dYV/books";

const fetchBooks = createAsyncThunk("books/fetchUsers", async (thunkAPI) => {
  try {
    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addBook = createAsyncThunk("books/addBook", async (book, thunkAPI) => {
  try {
    await axios.post(baseUrl, book);
    return book;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const removeBook = createAsyncThunk(
  "books/removeBook",
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl}/${itemId.item_id}`);
      return itemId.item_id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const initialState = {
  books: [],
  isLoading: true,
  error: null,
};
let bookItem = {};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        bookItem = { ...state, isLoading: false };
        return bookItem;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        bookItem = { ...state, isLoading: false };
        const data = action.payload;
        const booksList = Object.keys(data).map((item_id) => ({
          item_id,
          ...data[item_id][0],
        }));
        bookItem = { ...state, isLoading: false };
        bookItem = { ...state, books: booksList };
        return bookItem;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        bookItem = { ...state, isLoading: false, error: action.payload };
        return bookItem;
      })
      .addCase(addBook.pending, (state) => {
        bookItem = { ...state, isLoading: true };
        return bookItem;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = action.payload;
        const newBook = state.books;
        bookItem = { ...state, isLoading: false, books: [...newBook, book] };
        return bookItem;
      })
      .addCase(addBook.rejected, (state, action) => {
        bookItem = { ...state, isLoading: false, error: action.payload };
        return bookItem;
      })
      .addCase(removeBook.pending, (state) => {
        bookItem = { ...state, isLoading: true };
        return bookItem;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemId = action.payload;
        const data = state.books.filter((book) => book.item_id !== itemId);
        bookItem = {
          ...state,
          isLoading: false,
          books: data,
        };
        return bookItem;
      })
      .addCase(removeBook.rejected, (state, action) => {
        bookItem = { ...state, isLoading: false, error: action.payload };
        return bookItem;
      });
  },
});

export { fetchBooks, addBook, removeBook };
export default booksSlice.reducer;
