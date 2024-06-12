import { JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, mergeMap } from 'rxjs'
import { BookStoreService } from '../shared/book-store.service';

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
    mergeMap(isbn => this.bookStore.getSingleBook(isbn))
  ));

  constructor(){

  }
}
