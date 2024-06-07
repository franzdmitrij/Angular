import { Component, Pipe, PipeTransform, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { BookComponent } from '../book/book.component';


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
  imports: [JsonPipe, UpperCasePipe, BlubbPipe, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  // Neuer Stil
  books = signal<Book[]>([
    {
      isbn: '000',
      title: 'angular',
      description: 'Tolles Buch',
      rating: 0,
    },
    {
      isbn: '000',
      title: 'angular',
      description: 'Tolles Buch',
      rating: 1
    },
    {
      isbn: '001',
      title: 'angular 1',
      description: 'Tolles Buch 1',
      rating: 2
    },
    {
      isbn: '002',
      title: 'angular 2',
      description: 'Tolles Buch 2',
      rating: 3
    }
  ]);

  // Alter Stil
  // Duck
  books2: Book[] = [
    {
      isbn: '000',
      title: 'angular',
      description: 'Tolles Buch',
      rating: 1
    },
    {
      isbn: '001',
      title: 'angular 1',
      description: 'Tolles Buch 1',
      rating: 2
    },
    {
      isbn: '002',
      title: 'angular 2',
      description: 'Tolles Buch 2',
      rating: 3
    }
  ];

  doRateUpHandler(book: Book){
    console.table(book);
    //book.rating = book.rating + 1;
  }

  doRateDownHandler(book: Book){
    console.table(book);
    //book.rating = book.rating - 1;
  }
}
