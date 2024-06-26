import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import { state } from '@angular/animations';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooksLoading = createSelector(
  selectBookState,
  state => state.loading
)

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
)
