import { Routes } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

export const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: "books"},

  // http://localhost:4200/books
{ path:'books', component: DashboardComponent },
{ path:'books/:isbn', component: BookDetailsComponent }
];
