import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Numbers } from '../store/numbers.reducer';
import * as AppActions from '../store/numbers.actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  interval: Observable<number>;
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
      this.interval = interval(1000);
      this.intervalSubscript = this.interval.subscribe(() => {
        this.store.dispatch(AppActions.change());
      });
    }
  }

}
