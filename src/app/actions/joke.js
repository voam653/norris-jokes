import * as NorrisJokesApi from '../../api/NorrisJokesApi';
import * as actionsTypes from './actionsTypes';

export function getJoke(category) {
    return dispatch => {
        NorrisJokesApi.getNorrisJoke(category)
            .then(joke => {
                    dispatch({ type: actionsTypes.GET_JOKE, joke: joke.data })
                    return joke.data;
                }
            );
    }
}