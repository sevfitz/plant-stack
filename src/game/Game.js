import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../card/Card';
import { Selection } from '../selection/Selection';
import { chooseGenus, chooseSpecies, getCards } from './actions';

export class Game extends Component {

    render() {
        return (
            <div className="content">
                <div className="columns is-3">
                    <div className="column is-one-third"></div>
                    <div className="column is-one-third">
                        <div className="card" style={{ margin: "50" }}>
                            <Card cards={this.props.cards} selection={this.props.selection} selectedCard={this.props.selectedCard}/>
                            {/* <Selection card={this.props.card} choice={this.props.display} onSelectGenus={this.props.chooseGenus} onSelectSpecies={this.props.chooseSpecies} /> */}
                        </div>
                    </div>
                    <div className="column is-one-third"></div>
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
        selection: state.selection,
        cards: state.cards,
        seenCards: state.seenCards,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getCards: () => {
        //     dispatch(getCards());
        // },
        chooseGenus: () => {
            dispatch(chooseGenus());
        },
        chooseSpecies: () => {
            dispatch(chooseSpecies());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// TODO: create new row of cards that get filled from array of completed
// card objects as seen - first put on the right side, then make card
// components

//  show data after add it on /cards?