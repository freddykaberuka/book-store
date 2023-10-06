import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksReducer from './books/booksSlice';
import CategoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  BooksReducer, CategoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
