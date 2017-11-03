import { fetchHasErrored, cardsAreLoading, cards } from './reducers';
import * as actions from './constants';

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

describe('fetchHasErrored reducer', () => {
    it('initial state is false', () => {
        const newState = fetchHasErrored(undefined, { type: undefined });
        expect(newState).toEqual(false);
    });

    it('payload of true updates state to hasErrored is true', () => {
        const newState = fetchHasErrored( false, { type: actions.FETCH_HAS_ERRORED, hasErrored: true });
        expect(newState).toEqual(true);
    });

    it('payload of false updates state to hasErrored is false', () => {
        const newState = fetchHasErrored( true, { type: actions.FETCH_HAS_ERRORED, hasErrored: false });
        expect(newState).toEqual(false);
    });
});

describe('cardsAreLoading reducer', () => {
    it('initial state is true', () => {
        const newState = cardsAreLoading(undefined, { type: undefined });
        expect(newState).toEqual(true);
    });

    it('payload of true updates state to areLoading is true', () => {
        const newState = cardsAreLoading( false, { type: actions.CARDS_ARE_LOADING, areLoading: true });
        expect(newState).toEqual(true);
    });

    it('payload of false updates state to areLoading is false', () => {
        const newState = cardsAreLoading( true, { type: actions.CARDS_ARE_LOADING, areLoading: false });
        expect(newState).toEqual(false);
    });
});