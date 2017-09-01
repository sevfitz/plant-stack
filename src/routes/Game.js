import React, { Component } from 'react';
import { AddCard } from '../components/AddCard';
import { Card } from '../components/Card';

export class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            seen: [],
            current: 0
        }
        this.onAdd = this.onAdd.bind(this);
    }

    componentDidMount() {
        fetch('/api/cards')
            .then(res => res.json())
            .then(cards => this.setState({ cards }))
            .catch(error => console.log(error));
    }

    onAdd(name, genus, species, description, url) {
        fetch('/api/cards', {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ name, genus, species, description, url })
        })
        .then(res => res.json())
        .then(card => {
            this.setState({ cards: [
                ...this.state.cards,
                card
            ]});
        })
        .catch(error => console.log(error));
    }

    render() {


        return (
            <div>
                <div>
                    <Card />
                </div>
                <div>
                    <AddCard onAdd={this.onAdd}/>
                </div>
            </div>
        );
    }

}