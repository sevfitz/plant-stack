import { ADD_CARD } from './addcard.constants';

export function addCard (card) {
    return {
        type: ADD_CARD,
        payload: card
    };
}