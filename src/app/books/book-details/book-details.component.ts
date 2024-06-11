import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  // TODO: mit RxJs geht das cooler
  isbn = input<string>();

  constructor(){
    console.log(this.isbn());
  }


}
