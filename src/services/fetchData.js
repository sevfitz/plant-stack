// import React from 'react';
// import { connect } from 'react-redux';
// import { cardsAreLoading, getCards, fetchHasErrored } from  '../store/card.actions';

// // referenced https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
// export function fetchData({ dispatch }) {
//     console.log('inside fetchData', fetchData);
//     return (dispatch) => {
//         dispatch(cardsAreLoading(true));

//         dispatch(getCards())
//             .then(res => {
//                 console.log('res is', res);
//                 if (!res.ok) { throw Error(res.statusText); }
            
//             dispatch(cardsAreLoading(false));
//             return res;
//             })
//             .then(res => res.json())
//             // .then(cards => dispatch(getCards(cards)))
//             .catch(() => dispatch(fetchHasErrored(true)));
//     }
// }


