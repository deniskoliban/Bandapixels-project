
import { Action, createAction } from '@ngrx/store';

export const CHANGE = 'CHANGE';
export const INSCREASE = 'INSCREASE';
export const DECREASE = 'DECREASE';


export const inscrease = createAction(INSCREASE);
export const decrease = createAction(DECREASE);
export const change = createAction(CHANGE);

