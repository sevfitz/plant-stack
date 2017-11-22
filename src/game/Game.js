import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../card/Card';
import { Selection } from '../selection/Selection';
import { chooseGenus, chooseSpecies, getCards } from './actions';

export class Game extends Component {

    // componentDidMount() {
    //     console.log('calling getCards in Game component');
    //     if (this.props.card === []) this.props.getCards();
    // }

    render() {
        const selectedCard = this.props.cards.find((card) => card._id === this.props.selection._id);
        
        return (
            <div className="content">
                <div className="columns is-3">
                    <div className="column is-one-third"></div>
                    <div className="column is-one-third">
                        <div className="card" style={{ margin: "50px" }}>
                            <Card selection={this.props.selection} selectedCard={selectedCard}/>
                            <Selection cards={this.props.cards} selection={this.props.selection} selectedCard={selectedCard} onSelectGenus={this.props.chooseGenus} onSelectSpecies={this.props.chooseSpecies} />
                        </div>
                    </div>
                    <div className="column is-one-third"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // const selectedCard = state.cards.find((card) => card._id === state.selection._id);
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
        chooseGenus: (_id, choice, userSelection) => {
            dispatch(chooseGenus(_id, choice, userSelection));
        },
        chooseSpecies: (_id, choice, userSelection) => {
            dispatch(chooseSpecies(_id, choice, userSelection));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

// TODO: create new row of cards that get filled from array of completed
// card objects as seen - first put on the right side, then make card
// components

//  show data after add it on /cards?