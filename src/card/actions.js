import * as actions from './constants';
import api from '../services/cardApi';

export function getHasErrored(boolean) {
    return {
        type: actions.GET_HAS_ERRORED,
        hasErrored: boolean
    };
}

export function cardsAreLoading(boolean) {
    return {
        type: actions.CARDS_ARE_LOADING,
        areLoading: boolean
    };
}



export function makeGetCards(api) {
    return function getCards() {
        return (dispatch) => {
            return api
                .getAll()
                .then(cards => {
                    dispatch({ type: actions.GET_CARDS, payload: cards });
                    return cards;
                });
        }
    }
}

export const getCards = makeGetCards(api);


