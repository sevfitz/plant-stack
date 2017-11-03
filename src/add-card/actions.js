import { ADD_CARD } from './constants';
import api from '../services/cardApi';

export function makeAddCard(api) {
  return function addCard(card) {
      return (dispatch) => {
          return api
              .add(card)
              .then(card => dispatch({ type: ADD_CARD, payload: card }));
      }
  }
}

export const addCard = makeAddCard(api);