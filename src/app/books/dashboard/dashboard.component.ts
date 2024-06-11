import { Component, OnInit, Pipe, PipeTransform, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookStoreService } from '../shared/book-store.service';


@Pipe({
  name: 'blubb',
  standalone: true
})
export class BlubbPipe implements PipeTransform {

  transform(value: string): string {
    return value + 'blubb';
  }

}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, UpperCasePipe, BlubbPipe, BookComponent, BookCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent /* implements OnInit */{

  br = inject(BookRatingService);
  bs = inject(BookStoreService);

  // geht auch
  constructor(private brs: BookRatingService){
      this.bs.getAllBooks().subscribe(books => this.books.set(books));
  }

  // ngOnInit(): void {
  //   this.bs.getAllBooks().subscribe(books => this.books.set(books));
  // }

  // Neuer Stil
  books = signal<Book[]>([
    // {
    //   isbn: '000',
    //   title: 'angular 1',
    //   description: 'Tolles Buch 1',
    //   rating: 0,
    // },
    // {
    //   isbn: '001',
    //   title: 'angular 2',
    //   description: 'Tolles Buch 2',
    //   rating: 1
    // },
    // {
    //   isbn: '002',
    //   title: 'angular 3',
    //   description: 'Tolles Buch 3',
    //   rating: 2
    // },
    // {
    //   isbn: '003',
    //   title: 'angular 4',
    //   description: 'Tolles Buch 4',
    //   rating: 3
    // }
  ]);

  // Alter Stil
  // Duck
  books2: Book[] = [
    // {
    //   isbn: '000',
    //   title: 'angular',
    //   description: 'Tolles Buch',
    //   rating: 1
    // },
    // {
    //   isbn: '001',
    //   title: 'angular 1',
    //   description: 'Tolles Buch 1',
    //   rating: 2
    // },
    // {
    //   isbn: '002',
    //   title: 'angular 2',
    //   description: 'Tolles Buch 2',
    //   rating: 3
    // }
  ];

  doRateUpHandler(book: Book){
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);

    console.table(book);
    // So nicht
    //book.rating = book.rating + 1;
  }

  doRateDownHandler(book: Book){

    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);

    console.table(book);
    // So nicht
    //book.rating = book.rating - 1;
  }

  updateAndSort(ratedBook: Book): void{

    // Kopie erzeugen
    // const newBooks = [...this.books()];
    // const newBooks = this.books().map(b => b);

    const newBooks = this.books()
    .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    .sort((a, b) => b.rating - a.rating);

    this.books.set(newBooks);
  }

  rateDownNotAllowed(b: Book): boolean{
    return b.rating < 2;
  }

   rateUpNotAllowed(b: Book): boolean{
     return b.rating > 4;
  }

  doCreateBookHandler(newBook: Book): void{
    const book = {
      ...newBook,
      firstThumbnailUrl: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'
    }

    // Nicht immutable, aber massiv speicher eingespart
    // this.books.update(x => {x.push(newBook); return x;});

    // Imutable, so ist richtig
    this.books.update(x => [...x, book].sort((a, b) => b.rating - a.rating));

    // ODER
    // const newArray = [...this.books(), newBook].sort((a, b) => b.rating - a.rating);
    // this.books.set(newArray);

    // Push sollte man nicht verwenden
    //this.books().push(book);
    //this.updateAndSort(book);
  }
}
