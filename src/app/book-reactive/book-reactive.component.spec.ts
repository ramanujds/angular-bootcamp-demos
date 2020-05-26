import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReactiveComponent } from './book-reactive.component';

describe('BookReactiveComponent', () => {
  let component: BookReactiveComponent;
  let fixture: ComponentFixture<BookReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
