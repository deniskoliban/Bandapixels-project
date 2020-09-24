
import * as AppAction from './app.actions';

export interface Numbers {
    firstNum: number;
    secondNum: number;
}


const initialState: Numbers = {
    firstNum: -5,
    secondNum: 10
};

export function nubersReducer(state = initialState, action: AppAction.UserActionsType) {
    switch (action.type) {
        //  case AppAction.CHANGE:
         //   return state;
        case AppAction.INSCREASE:
            const editStateIncrease = {...state};
            editStateIncrease.firstNum++;
            return {
                ...state,
                ...editStateIncrease
            };
        case AppAction.DECREASE:
            const editStateDecrease = {...state};
            editStateDecrease.secondNum--;
            return {
                ...state,
                ...editStateDecrease
            };
        default:
            return state;
    }
}
