import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NumericCounterComponent } from './containers/numeric-counter/numeric-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    // StoreModule.forFeature('counterState', counterReducer)
  ],
  declarations: [NumericCounterComponent],
  exports: [NumericCounterComponent]
})
export class CounterModule { }
