import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import { addCard } from '../store/card.actions';
import AddCard from '../components/AddCard';
import { Card } from '../components/Card';
import { cardsAreLoading, getCards, fetchHasErrored } from  '../store/card.actions';

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

export class Game extends Component {
    
    fetchData({dispatch}) {
        dispatch(cardsAreLoading(true));
    
        dispatch(getCards())
            .then(res => {
                console.log('res is', res);
                if (!res.ok) { throw Error(res.statusText); }
    
                dispatch(cardsAreLoading(false));
                return res;
            })
            .then(res => res.json())
            // .then(cards => dispatch(getCards(cards)))
            .catch(() => dispatch(fetchHasErrored(true)));
    }
    // referenced https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3

    // componentDidMount({dispatch}) {
    //     const cards = this.fetchData({dispatch});
    //     console.log('cards is', cards);
    // }
    // onAdd(name, genus, species, description, url) {
    //     fetch('/api/cards', {
    //         method: "POST",
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify({ name, genus, species, description, url })
    //     })
    //     .then(res => res.json())
    //     .then(card => {
    //         this.setState({ cards: [
    //             ...this.state.cards,
    //             card
    //         ]});
    //     })
    //     .catch(error => console.log(error));
    // }

    render() {
        if (this.props.hasErrored) {
            return <p>There was an error loading the cards.</p>;
        }
        if (this.props.cardsAreLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div>
                    <Card />
                </div>
                <div>
                    <AddCard />
                </div>
            </div>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            cards: state.cards,
            hasErrored: state.fetchHasErrored,
            isLoading: state.cardsAreLoading
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        // console.log('dispatch is', dispatch);
        // dispatch(getCards());
        // return bindActionCreators( { addCard }, dispatch );
        return {
            fetchData: () => dispatch(this.fetchData())
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Game);