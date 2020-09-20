
import * as AppAction from './app.actions';

const initialState = {
    firstNum: -5,
    secondNum: 10
};

export function usersDataReducer(state = initialState, action: AppAction.UserActionsType) {
    switch (action.type) {
        case AppAction.CHANGE:
            return state;
        case AppAction.INSCREASE:
            const editStateIncrease = {...state};
            editStateIncrease.firstNum++;
            return {
                ...state,
                editStateIncrease
            };
        case AppAction.DECREASE:
            const editStateDecrease = {...state};
            editStateDecrease.secondNum--;
            return {
                ...state,
                editStateDecrease
            };
        default:
            return state;
    }
}
