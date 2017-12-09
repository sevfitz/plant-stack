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

export function userChoice(_id, choice, userSelection) {
    return (dispatch, getState) => {
        dispatch({
            type: actions.USER_CHOICE,
            payload: {
                _id: _id,
                choice: choice,
                userSelection: userSelection
            }
        });
        dispatch({
            type: actions.RANDOM_CARD,
            payload: { cards: getState().cards }
        });
    }
}

// export function chooseGenus(_id, choice, userSelection) {
//     return (dispatch, getState) => {
//         dispatch({
//             type: actions.CHOOSE_GENUS,
//             payload: {
//                 _id: _id,
//                 choice: choice,
//                 userSelection: userSelection
//             }
//         });
//         dispatch({
//             type: actions.RANDOM_CARD,
//             payload: { cards: getState().cards }
//         });
//     }
// }

// export function chooseSpecies(_id, choice, cards) {
//     return (dispatch, getState) => {
//         dispatch({
//             type: actions.CHOOSE_SPECIES,
//             payload: {
//                 _id: _id,
//                 choice: choice,
//                 cards: cards,
//                 userSelection: 'species'
//             }
//         });
//         dispatch({
//             type: actions.RANDOM_CARD,
//             payload: { cards: getState().cards }
//         });
//     };
// }

export function seenCard(){
    
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
                    dispatch({ type: actions.GET_CARDS, payload: cards });
                    return cards;
                })
                .then(res => {
                    dispatch({ type: actions.RANDOM_CARD, payload: { cards: res } });
                    return res;
                });
        }
    }
}

export const getCards = makeGetCards(api);