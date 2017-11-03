import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addCard } from '../card/actions';
// import AddCard from '../add-card/AddCard';
import { Card } from '../card/Card';
import { cardsAreLoading, getCards, fetchHasErrored } from  '../card/actions';
import { Selection } from '../selection/Selection';
// import { chooseGenus } from '../selection/actions';

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

function chooseGenus(_id, displayed, chose) {
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
function chooseSpecies(_id, displayed, chose) {
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
            <div className='content'>
                <div className='columns is-3'>
                    <div className='column is-one-third'></div>
                    <div className='column is-one-third'>
                        <div className='card' style={{ margin: '50'}}>
                            <Card card={this.props.card} choice={this.props.display}/>
                            <Selection card={this.props.card} choice={this.props.display} onSelectGenus={this.props.chooseGenus} onSelectSpecies={this.props.chooseSpecies} />
                        </div>
                    </div>
                    <div className='column is-one-third'></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const selectedCard = state.cards.find((card) => card._id === state.selection._id);

    // const cardToPush = {
    //     name: selectedCard.name,
    //     genus: selectedCard.genus,
    //     species: selectedCard.species,
    //     description: selectedCard.description,
    //     url: selectedCard.url,
    //     gotGenusRight: 
    //     gotSpeciesRight:
    // };

    return {
        card: selectedCard,
        cards: state.cards,
        display: state.selection.choice,
        seenCards: state.seenCards,
        hasErrored: state.fetchHasErrored,
        isLoading: state.cardsAreLoading
    };
};

const mapDispatchToProps = {
    fetchData,
    chooseGenus,
    chooseSpecies
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// TODO: create new row of cards that get filled from array of completed
// card objects as seen - first put on the right side, then make card
// components

//  show data after add it on /cards?