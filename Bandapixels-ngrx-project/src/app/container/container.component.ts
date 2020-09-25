import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Numbers } from '../store/numbers.reducer';
import * as numbersActions from '../store/numbers.actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  intervalSubscript: Subscription;
  numbers: number[];

  constructor(private store: Store<{numbers: Numbers}>) { }

  ngOnInit(): void {
    const numbersObserv = this.store.select('numbers');
    numbersObserv.subscribe(numbersObj => {
    this.numbers = Object.values(numbersObj);
    });
  }

  startCount() {
    if (!this.intervalSubscript) {
      this.intervalSubscript = interval(1000).subscribe(() => {
        this.store.dispatch(numbersActions.change());
      });
    }
  }

  resetInterval() {
    if (this.intervalSubscript) {
      this.intervalSubscript.unsubscribe();
      this.intervalSubscript = null;
    }
  }

  stopCount() {
    this.resetInterval();
  }

  resetCount() {
    this.store.dispatch(numbersActions.reset());
    this.resetInterval();
  }

}
