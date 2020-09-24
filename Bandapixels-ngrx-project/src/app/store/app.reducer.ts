
import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as AppAction from './app.actions';

export interface Numbers {
        firstNum: number;
        secondNum: number;
}


const initialState: Numbers = {
        firstNum: -5,
        secondNum: 10
};

const numbersReducer = createReducer(
    initialState,
    on(AppAction.inscrease, (state: Numbers) => {
        const editState = { ...state };
        editState.firstNum++;
        return ({
            ...state,
            ...editState
        });
    }),
    on(AppAction.decrease, (state: Numbers) => {
        const editState = { ...state };
        editState.firstNum--;
        return ({
            ...state,
            ...editState
        });
    }),

);


export function appReducer(state: Numbers | undefined, action: Action) {
    return numbersReducer(state, action);
  }

