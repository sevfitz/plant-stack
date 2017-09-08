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
                dispatch(cardsAreLoading(false));
                return res;
            })
            .catch((e) => {
                dispatch(fetchHasErrored(true));
            });
    }
}

export function selectCard(cards) {
    const index = Math.floor(Math.random() * cards.length);
    // TODO: push card into seenCards here
    return cards[index];
}

export function makeChoice({ genus, species }) {
    const choiceArray = [genus, species];
    const index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
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
        
        const selectedCard = selectCard(this.props.cards);
        const choice = makeChoice(selectedCard);
        return (
            <div>
                <div>
                    <Card card={selectedCard} choice={choice}/>
                </div>
                <div>
                    <Selection card={selectedCard} choice={choice}/>
                </div>
            </div>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            cards: state.cards,
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