import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginPrompt = () => (
    <p>
        <Link to="/auth/signin">Sign in</Link>
        {' or '}
        <Link to="/auth/signup">Sign up</Link>
        {' to add your own cards to the game.'}
    </p>
);

const Instructions = ({ name }) => (
    <p>Welcome {name}! <Link to="/cards">Add a card!</Link>.</p>
);

export function Home({ user }) {
    return (
        <div>
            <h2>Welcome to a plant game!</h2>
            <p>Play the game to see a set of plant cards. You'll see a word that is either the genus or species name for the plant. Guess which one it is and click the corresponding button.</p>
            <p>Once you see both the genus and species for a given plant, its card will appear at the bottom. Green text indicates you guessed correctly; red means you were wrong. Play again and again!</p>
            { user ? <Instructions name={user.name}/> : <LoginPrompt/> }
            <Link to="/game">Play the Game!</Link>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(
    mapStateToProps
)(Home);
