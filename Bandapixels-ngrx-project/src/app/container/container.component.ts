import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Numbers } from '../store/app.reducer';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  numbers: number[];

  constructor(private store: Store<{numbers: Numbers}>) { }

  ngOnInit(): void {
    const numbersObserv = this.store.select('numbers');
    numbersObserv.subscribe(numbersObj => {
    this.numbers = Object.values(numbersObj);
    });
  }

}
