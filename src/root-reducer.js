import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from './addcard.reducer';

export default combineReducers({
    cards: cards,
    fetchHasErrored: fetchHasErrored,
    cardsAreLoading: cardsAreLoading
});