import { Component, Input, computed, input } from '@angular/core';
import { Book } from '../shared/book';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass],
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
}
