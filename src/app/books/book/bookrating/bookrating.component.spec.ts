import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookratingComponent } from './bookrating.component';
import { signal } from '@angular/core';

describe('BookratingComponent', () => {
  let component: BookratingComponent;
  let fixture: ComponentFixture<BookratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookratingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookratingComponent);
    component = fixture.componentInstance;

    component.bookRating = signal(
      1
    ) as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
