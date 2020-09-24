import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable({
    providedIn: 'root'
})
export class NameEffects {
    constructor(private actions$: Actions, private store: Store) {}

    effectName$ = createEffect(
        () => this.actions$.pipe(
          ofType(AppActions.CHANGE),
          switchMap(() => [AppActions.inscrease(), AppActions.decrease(), AppActions.decrease()])
        )
      );

}

