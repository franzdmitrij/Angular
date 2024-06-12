import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BookActions } from './book.actions';
import { BookStoreService } from '../shared/book-store.service';


@Injectable()
export class BookEffects {

  actions$ = inject(Actions);

  bookStore = inject(BookStoreService);

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.bookStore.getAllBooks().pipe(
          map(books => BookActions.loadBooksSuccess({ books })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });
}
