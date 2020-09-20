import { Action } from '@ngrx/store';

export const CHANGE = 'CHANGE';
export const INSCREASE = 'INSCREASE';
export const DECREASE = 'DECREASE';

export class Change implements Action {
    readonly type = CHANGE;
}

export class Inscrease implements Action {
    readonly type = INSCREASE;
}

export class Decrease implements Action {
    readonly type = DECREASE;
}

export type UserActionsType = Change | Inscrease | Decrease;
