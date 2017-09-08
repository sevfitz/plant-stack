import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from './store/card.reducers';
import { selection } from './store/selection.reducers';

export default combineReducers({
    cards: cards,
    selection: selection,
    fetchHasErrored: fetchHasErrored,
    cardsAreLoading: cardsAreLoading
});