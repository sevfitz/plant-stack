import { combineReducers } from 'redux';
import { cards, selection, seenCards } from '../game/reducers';
import auth from '../auth/reducers';

export default combineReducers({
    auth,
    cards,
    selection,
    seenCards
});