import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { Store } from '@ngrx/store';
import { BookActions } from './books/store/book.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // Alter Stil
  title = 'Book Rating';
  zahl = 100;

  title2 = signal('Book Rating 2')



  constructor(store: Store){
    //window.setTimeout(() => this.title = "bbblubbb", 1000);

    //window.setTimeout(() => this.title2.set("bbblubbb 2"), 1000);

    store.dispatch(BookActions.loadBooks());

  }
}
