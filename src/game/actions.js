import { cardsAreLoading, getCards, fetchHasErrored } from  './actions';
import 


function fetchData() {
    return (dispatch) => {
        dispatch(getCards())
            .then(res => {
                dispatch({ type: 'RANDOM_CARD', payload: { cards: res } });
                dispatch(cardsAreLoading(false));
                return res;
            })
            .catch((e) => {
                dispatch(fetchHasErrored(true));
            });
    }
}

export function chooseGenus(_id, displayed, chose) {
    return (dispatch) => {
        dispatch({
            type: 'CHOOSE_GENUS',
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
            type: 'CHOOSE_SPECIES',
            payload: {
                _id: _id,
                displayed: displayed,
                choice: chose
            }
        });
    }
}
