import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

// Das "f" muss wieder weg!!! Das "f" sorgt dafür, dass nur die Tests hier ausgeführt werden
describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  // Arrange
  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '100',
      title: "Testbook",
      description: 'Test',
      rating: 3
    }
  });

  it('should rate up a book by one', () => {
    // Arrange
    const rateBook = service.rateUp(book);

    // Assert
    expect(rateBook.rating).toBe(4);

  });

  it('should rate down a book by one', () => {
    // Arrange
    const rateBook = service.rateDown(book);
    expect(rateBook.rating).toBe(2);
  });

  it('darf nicht größer 5 sein', () => {
    // Arrange
    book.rating = 5;
    const rateBook = service.rateUp(book);
    expect(rateBook.rating).toBe(5);
  });

  it('darf nicht kleinr 1 sein', () => {
    // Arrange
    book.rating = 1;
    const rateBook = service.rateDown(book);
    expect(rateBook.rating).toBe(1);
  });

  it('should not mutate the book', () =>{
    const frozedBook = Object.freeze(book);
    expect(() => service.rateUp(frozedBook)).not.toThrow;
    expect(() => service.rateDown(frozedBook)).not.toThrow;
  });


});
