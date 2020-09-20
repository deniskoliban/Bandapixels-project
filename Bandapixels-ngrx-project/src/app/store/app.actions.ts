import { Action } from '@ngrx/store';

export const CHANGE = 'CHANGE';
export const INSCREASE = 'INSCREASE';
export const DECREASE = 'DECREASE';

export class Change implements Action {
    readonly type = CHANGE;
    constructor(public payload: number) {

    }
}

export class Inscrease implements Action {
    readonly type = INSCREASE;
    constructor(public payload: number) {

    }
}

export class Decrease implements Action {
    readonly type = DECREASE;
    constructor(public payload: number) {

    }
}


