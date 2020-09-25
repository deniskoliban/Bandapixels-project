import { ActionReducerMap } from '@ngrx/store';
import * as fromNumbers from './store/numbers.reducer';

export interface AppState {
    numbers: fromNumbers.Numbers;
}

export const appReducer: ActionReducerMap<AppState> = {
    numbers: fromNumbers.numbersCountReducer
};

