import { combineReducers } from 'redux';
import { cards, fetchHasErrored, cardsAreLoading } from './store/card.reducers';

export default combineReducers({
    cards: cards,
    fetchHasErrored: fetchHasErrored,
    cardsAreLoading: cardsAreLoading
});