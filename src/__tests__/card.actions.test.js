import * as actions from '../store/card.constants';
import { makeAddCard, makeGetCard } from '../store/card.actions';

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
                expect(dispatched).toEqual([ {type: actions.ADD_CARD, payload: card } ]);
            });
    });

});