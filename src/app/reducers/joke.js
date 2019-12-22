import * as actionsTypes from '../../app/actions/actionsTypes';

export function joke(state = null, action) {
    switch (action.type) {
        case actionsTypes.GET_JOKE:
            return action.joke;

        default:
            return state;
    }
}