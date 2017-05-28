import { POPUP_IS_OPEN, ALERT_DETAIL } from '../actions/index';

const INITIAL_STATE = {
    popupIsOpen: false,
    alertDetail: {}
}

export function alertReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case POPUP_IS_OPEN:
            return Object.assign({}, state, { popupIsOpen: action.payload });
        case ALERT_DETAIL:
            return Object.assign({}, state, { alertDetail: action.payload });
        default:
            return state;
    }
}