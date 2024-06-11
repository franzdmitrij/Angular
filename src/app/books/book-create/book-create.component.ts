import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {nonNullable: true, validators:[Validators.required, Validators.minLength(3)] }),
    title: new FormControl('', {nonNullable: true, validators:[Validators.required] }),
    description: new FormControl('', {nonNullable: true }),
    rating: new FormControl<number | undefined>(undefined, {nonNullable: true , validators:[Validators.min(1), Validators.max(5)]})
  });


  c = this.bookForm.controls;

  isInvalid(control: FormControl){
    return control.invalid && control.touched;
  }

  create = output<Book>();

  submitForm(){
    const newBook = this.bookForm.getRawValue() as Book;

    // Hands On:
    // 1. Erstelle ein Event mit dem Namen `create`
    // 2. Emitte das Event mit dem neuen Buch
    // 3. Binde dich auf das Event im Dashboard (runde Klammern)
    // 4. Füge das neue Buch dem Buch-Array hinzu (immutable, z. B. mit Spread Operator)

    this.create.emit(newBook);
    this.bookForm.reset();
  }
}
