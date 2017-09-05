import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../addcard.actions';
import AddCard from '../components/AddCard';
import { Card } from '../components/Card';
import { fetchData } from '../services/fetchData';

export class Game extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cards: [],
    //         seen: [],
    //         current: 0
    //     }
    //     this.onAdd = this.onAdd.bind(this);
    // }

    componentDidMount() {
        fetchData();
    }

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
        return {
            fetchData: () => dispatch(fetchData())
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Game);