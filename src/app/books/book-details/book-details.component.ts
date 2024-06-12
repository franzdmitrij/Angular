import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, map, mergeMap, switchMap, of, retry, delay } from 'rxjs'
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  route = inject(ActivatedRoute);
  bookStore = inject(BookStoreService);

  book = toSignal(this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bookStore.getSingleBook(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        title: 'Error',
        describe: err.message
      }))
    )),
  ));

  constructor(){

  }
}
