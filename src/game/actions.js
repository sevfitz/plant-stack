import api from '../services/cardApi';
import * as actions from './constants';


// export function getData() {
//     return (dispatch) => {
//         dispatch(getCards())
//             .then(res => {
//                 dispatch({ type: actions.RANDOM_CARD, payload: { cards: res } });
//                 console.log('res is', res);
//                 dispatch(cardsAreLoading(false));
//                 return res;
//             })
//             .catch((e) => {
//                 dispatch(getHasErrored(true));
//             });
//     }
// }

export function chooseGenus(_id, displayed, chose) {
    return (dispatch) => {
        dispatch({
            type: actions.CHOOSE_GENUS,
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
            type: actions.CHOOSE_SPECIES,
            payload: {
                _id: _id,
                displayed: displayed,
                choice: chose
            }
        });
    }
}


// export function getHasErrored(boolean) {
//     return {
//         type: actions.GET_HAS_ERRORED,
//         hasErrored: boolean
//     };
// }

// export function cardsAreLoading(boolean) {
//     return {
//         type: actions.CARDS_ARE_LOADING,
//         areLoading: boolean
//     };
// }



export function makeGetCards(api) {
    return function getCards() {
        return (dispatch) => {
            return api
                .getAll()
                .then(cards => {
                    console.log('inside getCards returning with cards', cards);
                    dispatch({ type: actions.GET_CARDS, payload: cards });
                    return cards;
                })
                .then(res => {
                    dispatch({ type: actions.RANDOM_CARD, payload: { cards: res } });
                    console.log('res is', res);
                    return res;
                });
        }
    }
}

export const getCards = makeGetCards(api);