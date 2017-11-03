import * as actions from './constants';
import { makeAddCard, makeGetCards } from './actions';

describe('Card actions', () => {

    it('adds a card', () => {
        const api = {
            add(card) {
                return Promise.resolve(card);
            }
        };
        const card = { name: 'test plant card' };

        const dispatched = [];
        const dispatch = action => { dispatched.push(action) };
        const addedCard = makeAddCard(api);
        const dispatchFn = addedCard(card);

        dispatchFn(dispatch)
            .then(() => {
                expect(dispatched).toEqual([ { type: actions.ADD_CARD, payload: card } ]);
            });
    });

    it('gets all cards', () => {
        const cards = [1, 2, 3];
        const api = {
            getAll() {
                return Promise.resolve(cards);
            }
        };

        const dispatched = [];
        const dispatch = action => { dispatched.push(action) };
        const getCards = makeGetCards(api);
        const dispatchFn = getCards();

        dispatchFn(dispatch)
            .then(() => {
                expect(dispatched).toEqual([ { type: actions.GET_CARDS, payload: cards } ]);
            });
    });

});