import reducers from '../store/card.reducers';
import * as actions from '../store/card.actions';

describe('Card reducer', () => {
    it('initial state', () => {
        const newState = reducers(undefined, { type: undefined });
        expect(newState).toEqual([]);
    });
});