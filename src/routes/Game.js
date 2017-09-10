import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
// import { addCard } from '../store/card.actions';
// import AddCard from '../components/AddCard';
import { Card } from '../components/Card';
import { cardsAreLoading, getCards, fetchHasErrored } from  '../store/card.actions';
import { Selection } from '../components/Selection';

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

export class Game extends Component {
    
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        if (this.props.hasErrored) {
            return <p>There was an error loading the cards.</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }
        
        return (
            <div>
                <div>
                    <Card card={this.props.card} choice={this.props.display}/>
                </div>
                <div>
                    <Selection card={this.props.card} choice={this.props.display}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const selectedCard = state.cards.find((card) => card._id === state.selection._id);

    return {
        card: selectedCard,
        display: state.selection.choice,
        // seenCards: state.seenCards,
        hasErrored: state.fetchHasErrored,
        isLoading: state.cardsAreLoading
    };
};

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// TODO: create new row of cards that get filled from array of completed
// card objects as seen - first put on the right side, then make card
// components

// also TODO: auth with addCard being option after logging in
// then show data after add it?