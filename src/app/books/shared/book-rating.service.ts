import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book{
    if(book.rating >= 5){
      return book;
    }

    const bookNew = {
      ...book,
      rating: book.rating + 1
    }

    return bookNew;
  }

  rateDown(book: Book): Book{
    if(book.rating <= 1){
      return book;
    }

    const bookNew = {
      ...book,
      rating: book.rating - 1
    }

    return bookNew;
  }
}
