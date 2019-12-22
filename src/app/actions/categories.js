import * as NorrisJokesApi from '../../api/NorrisJokesApi';
import * as actionsTypes from './actionsTypes';

export function getCategories() {
    return dispatch => {
        NorrisJokesApi.getNorrisCategories()
            .then(categories => {
                    dispatch({ type: actionsTypes.GET_CATEGORIES, categories: categories.data })
                    return categories.data;
                }
            );
    }
}