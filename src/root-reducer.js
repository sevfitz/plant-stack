import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from './card.reducer';

export default combineReducers({
    cards: cards,
    fetchHasErrored: fetchHasErrored,
    cardsAreLoading: cardsAreLoading
});