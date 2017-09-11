import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from './store/card.reducers';
import auth from './store/auth.reducers';
import { selection } from './store/selection.reducers';

export default combineReducers({
    auth,
    cards,
    selection,
    fetchHasErrored,
    cardsAreLoading
});