import { combineReducers } from 'redux';
import { cards, selection, getHasErrored, cardsAreLoading } from '../game/reducers';
import auth from '../auth/reducers';

export default combineReducers({
    auth,
    cards,
    selection,
    getHasErrored,
    cardsAreLoading
});