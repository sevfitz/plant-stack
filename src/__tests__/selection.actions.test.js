import * as actions from '../store/selection.constants';
import { selectGenus } from '../store/selection.actions';

describe.skip('Selection actions', () => {

    it('selection creates corresponding object', () => {
        const selections = []; // eslint-disable-line
        const selection = {
            plantID: 123,
            species: 'some species',
            genus: 'some genus'
        };
        const expectedPayload = {
            plantID: 123,
            species: {
                correct: true,
                seen: false
            },
            genus: {
                correct: true,
                seen: true
            }
        }

        expect(selectGenus(selection)).toEqual({ type: actions.SELECT_GENUS, payload: expectedPayload })




    });
});