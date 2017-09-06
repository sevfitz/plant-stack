import { fetchHasErrored, cardsAreLoading, cards } from '../store/card.reducers';
import * as actions from '../store/card.constants';

describe('Card reducer', () => {
    it('initial state', () => {
        const newState = cards(undefined, { type: undefined });
        expect(newState).toEqual([]);
    });

    it('saves a card', () => {
        const card = { name: 'plant' };
        const newState = cards([], { type: actions.ADD_CARD, payload: card });
        expect(newState).toEqual([card]);
    });



});