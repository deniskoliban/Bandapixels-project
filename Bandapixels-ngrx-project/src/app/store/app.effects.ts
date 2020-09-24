import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable({
    providedIn: 'root'
})
export class NumbersEffects {
    constructor() {}


}

