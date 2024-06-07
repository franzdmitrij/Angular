import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-bookrating',
  standalone: true,
  imports: [],
  templateUrl: './bookrating.component.html',
  styleUrl: './bookrating.component.scss'
})
export class BookratingComponent {
  bookrating = input.required<number>();
  //isbnbook = input.required<string>();


  bookRating = computed(() =>{
    let ratingSymbol = '⭐️';
    let rating = '';
    for(let i = 0; i < this.bookrating(); i++){
      rating = rating + ratingSymbol;
    }

    return rating;
  });
}
