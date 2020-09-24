import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import * as numbersActions from './numbers.actions';

@Injectable({
    providedIn: 'root'
})
export class NumbersEffects {

    numberCountEffect$ = createEffect(() => this.actions$.pipe(
        ofType(numbersActions.CHANGE),
        switchMap(() => [numbersActions.inscrease(), numbersActions.decrease(), numbersActions.decrease()])
    )
    );

    constructor(private actions$: Actions) { }
}

