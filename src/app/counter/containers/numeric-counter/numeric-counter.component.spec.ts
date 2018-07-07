import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericCounterComponent } from './numeric-counter.component';

describe('NumericCounterComponent', () => {
  let component: NumericCounterComponent;
  let fixture: ComponentFixture<NumericCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
