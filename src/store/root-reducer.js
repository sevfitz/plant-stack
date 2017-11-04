import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from '../card/reducers';
import auth from '../auth/reducers';
import { selection } from '../game/reducers';

export default combineReducers({
    auth,
    cards,
    selection,
    fetchHasErrored,
    cardsAreLoading
});