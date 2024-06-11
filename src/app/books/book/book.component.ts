import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { Book } from '../shared/book';
import { NgClass } from '@angular/common';
import { BookratingComponent } from './bookrating/bookrating.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgClass, BookratingComponent, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  // geht auch
  //book: Book | undefined;
  // Alter Stil mit Dekorator
  // @Input({required: true}) book?: Book;


  // // Alter Stil mit Dekorator
  // @Output() rateUp = new EventEmitter<Book>();
  // @Output() rateDown = new EventEmitter<Book>();

  // doRateUp(){
  //   this.rateUp.emit(this.book);
  // }

  // doRateDown(){
  //   this.rateDown.emit(this.book);
  // }

  // Neuer Stil mit Signal --> Developer Preview
  book = input.required<Book>();

  rateDownNotAllowed = input<boolean>();
  rateUpNotAllowed = input<boolean>();

  tollesBuch = computed(() => this.book().rating == 1);

  rateUp = output<Book>();
  rateDown = output<Book>();

  doRateUp(){
    this.rateUp.emit(this.book());
  }

  doRateDown(){
    this.rateDown.emit(this.book());
  }
}
