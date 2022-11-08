import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("//localhost:3005/books?_page=1");
      // console.log("Response Data", response.data);
      return response.data;
    } catch (error) {
      // console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post("//localhost:3005/books", book);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/addBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`http://localhost:3005/books/${id}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const editBook = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(
        `http://localhost:3005/books/${book.id}`,
        book
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //------------------ ADD Book
    [addBook.pending]: () => {},
    [addBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
    },
    [addBook.rejected]: () => {},
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;
