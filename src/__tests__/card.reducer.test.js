import { fetchHasErrored, cardsAreLoading, cards } from '../store/card.reducers';
import * as actions from '../store/card.constants';

describe('Card reducer', () => {
    it('initial state', () => {
        const newState = cards(undefined, { type: undefined });
        expect(newState).toEqual([]);
    });

    it('saves a card', () => {
        const card1 = { name: 'plant1' };
        const newState = cards([], { type: actions.ADD_CARD, payload: card1 });
        expect(newState).toEqual([card1]);

        const card2 = { name: 'plant2' };
        const newState2 = cards(newState, {type: actions.ADD_CARD, payload: card2 });
        expect(newState2).toEqual([card1, card2]);
    });

    it('gets all cards', () => {
        const newState = cards([], { type: actions.GET_CARDS, payload: [1, 2, 3] });
        expect(newState).toEqual([1, 2, 3]);
    });




});