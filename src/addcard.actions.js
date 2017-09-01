import { ADD_CARD } from './addcard.constants';

export default function addCard (card = {}) {
    return {
        type: ADD_CARD,
        payload: card
    };
}