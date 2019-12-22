import { List } from 'immutable';
import * as actionsTypes from '../../app/actions/actionsTypes';

export function categories(state = new List(), action) {
    switch (action.type) {
        case actionsTypes.GET_CATEGORIES:
            return new List(action.categories);

        default:
            return state;
    }
}