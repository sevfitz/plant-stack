import React from 'react';
import { cardsAreLoading, cardsRetrieved, fetchHasErrored } from  '../addcard.actions';

// referenced https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function fetchData() {
    return (dispatch) => {
        dispatch(cardsAreLoading(true));

        fetch('/api/cards')
            .then(res => {
                if (!res.ok) { throw Error(res.statusText); }
            
            dispatch(cardsAreLoading(false));
            return res;
            })
            .then(res => res.json())
            .then(cards => dispatch(cardsRetrieved(cards)))
            .catch(() => dispatch(fetchHasErrored(true)));
    }
}
