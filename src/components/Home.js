import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h2>Welcome to a plant game!</h2>
            <p>Play the game to see a set of plant cards. You'll see a word that is either the genus or species name for the plant. Guess which one it is and click the corresponding button.</p>
            <p>Once you see both the genus and species for a given plant, its card will appear at the bottom. Green text indicates you guessed correctly; red means you were wrong. Play again and again!</p>
            <p>Login to add new cards to the set!</p>
            <Link to="/game">Play the Game!</Link>
        </div>
    )
}