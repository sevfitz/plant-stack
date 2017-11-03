import { cardsAreLoading, getCards, getHasErrored } from  './actions';
import * as actions from './constants';


export function getData() {
    return (dispatch) => {
        dispatch(getCards())
            .then(res => {
                dispatch({ type: 'RANDOM_CARD', payload: { cards: res } });
                dispatch(cardsAreLoading(false));
                return res;
            })
            .catch((e) => {
                dispatch(getHasErrored(true));
            });
    }
}

export function chooseGenus(_id, displayed, chose) {
    return (dispatch) => {
        dispatch({
            type: actions.chooseGenus,
            payload: {
                _id: _id,
                displayed: displayed,
                choice: chose
            }
        });
    }
}

export function chooseSpecies(_id, displayed, chose) {
    return (dispatch) => {
        dispatch({
            type: actions.chooseSpecies,
            payload: {
                _id: _id,
                displayed: displayed,
                choice: chose
            }
        });
    }
}
