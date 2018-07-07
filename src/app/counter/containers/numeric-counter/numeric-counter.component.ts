import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Increment, Decrement } from '../../actions/counter.actions';
import { selectCounter } from '../../selectors/counter.selector';
import { AppState } from '../../../core/reducers';

@Component({
  selector: 'app-numeric-counter',
  templateUrl: './numeric-counter.component.html',
  styleUrls: ['./numeric-counter.component.css']
})
export class NumericCounterComponent implements OnInit {

  // Bindings
  @Input() timeInterval: number;

  // Public Fields
  public counter$: Observable<number>;

  // Private Fields

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select<number>(selectCounter);
  }

  ngOnInit() {
  }

  public increment() {
    this.store.dispatch(new Increment());
  }

  public decrement() {
    this.store.dispatch(new Decrement());
  }

  public incrementAsync() {
    setTimeout(() => {
      this.store.dispatch(new Increment());
    }, this.timeInterval || 1000);
  }

  public decrementAsync() {
    setTimeout(() => {
      this.store.dispatch(new Decrement());
    }, this.timeInterval || 1000);
  }

}
