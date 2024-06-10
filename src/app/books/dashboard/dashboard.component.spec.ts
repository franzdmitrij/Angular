import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {


  const bookRatingServiceMock={
    rateUp: (book: Book) => book
  }

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers:[{
        provide: BookRatingService,
        useVlaue: bookRatingServiceMock
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    const br = TestBed.inject(BookRatingService);

    spyOn(br, 'rateUp').and.callThrough();

    const book = {} as Book;

    component.doRateUpHandler(book);

    expect(br.rateUp).toHaveBeenCalledOnceWith(book);
  });
});
