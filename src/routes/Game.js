import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import { addCard } from '../store/card.actions';
import AddCard from '../components/AddCard';
import { Card } from '../components/Card';
import { cardsAreLoading, getCards, fetchHasErrored } from  '../store/card.actions';

// referenced https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
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
    console.log('cards[index] is', cards[index]);
    return cards[index];
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
                    <Card card={selectCard(this.props.cards)}/>
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
            // seenCards: state.seenCards,
            hasErrored: state.fetchHasErrored,
            isLoading: state.cardsAreLoading
        };
    };
    
    const mapDispatchToProps = {
        fetchData
    };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
