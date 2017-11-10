import { combineReducers } from 'redux';
import { cards, selection, getHasErrored, cardsAreLoading, display, seenCards } from '../game/reducers';
import auth from '../auth/reducers';

export default combineReducers({
    auth,
    cards,
    selection,
    seenCards
});