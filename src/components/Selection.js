import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { chooseGenus, chooseSpecies } from '../store/selection.actions';

const SelectButton = styled.button`
    background-color: #ffed64;
    font-size: 20px;
    height: 40px;
    width: 100px;
    border: 2px solid #ffed64;
    border-radius: 25px;
`;

// function makeChoice(_id, displayed, chose) {
//     return (dispatch) => {
//         chose === 'genus' 
//         ? dispatch({ type: 'CHOSE_GENUS', payload: { _id: _id, displayed: displayed, chose: chose } })
//         : dispatch({ type: 'CHOSE_SPECIES', payload: { _id: _id, displayed: displayed, chose: chose } })
//     }
// }


export function Selection(props) {
    const { card, choice } = props;
    const { _id, name, genus, species } = card;
    return(
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                {/* let makeChoice = this.makeChoice.bind(this);
                const chose = event.target;
                makeChoice(_id, choice, chose);
                debugger */}
            }}>
                <p>I think {choice} is the {name}'s...</p>
                <SelectButton type="submit" onClick={(dispatch) => dispatch(chooseGenus(_id, choice, 'genus'))}>Genus</SelectButton>
                <span> OR </span>
                <SelectButton type="submit" onClick={(dispatch) => dispatch(chooseSpecies(_id, choice, 'species'))}>Species</SelectButton>
            </form>
        </div>
    );
}

// export default connect(
//     state => {
//         return ({ 
//             name: state.name, 
//             genus: state.genus, 
//             species: state.species, 
//             description: state.description, 
//             url: state.url 
//     })}
// )(Selection);

const mapStateToProps = (state) => {
    console.log('state in Selection is', state);
    const selectedCard = state.cards.find((card) => card._id === state.selection._id);
    return {
        card: selectedCard
    };
};

const mapDispatchToProps = {
    chooseGenus,
    chooseSpecies
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
