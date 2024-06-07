import { Component, Input, computed, input } from '@angular/core';
import { Book } from '../shared/book';
import { NgClass } from '@angular/common';
import { BookratingComponent } from './bookrating/bookrating.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass, BookratingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // geht auch
  //book: Book | undefined;
  // Alter Stil mit Dekorator
  //@Input({required: true}) book?: Book;

  // Neuer Stil mit Signal --> Developer Preview
  book = input.required<Book>();

  //tollesBuch = computed(() =>{
   // return this.book().rating == 1;
  //});

  tollesBuch = computed(() => this.book().rating == 1);

  // bookRating = computed(() =>{
  //   let ratingSymbol = '⭐️';
  //   let rating = '';
  //   for(let i = 0; i < this.book().rating; i++){
  //     rating = rating + ratingSymbol;
  //   }

  //   return rating;
  // });
}
