import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';

const SelectButton = styled.button`
    background-color: #ffed64;
    font-size: 20px;
    height: 40px;
    width: 100px;
    border: 2px solid #ffed64;
    border-radius: 25px;
`;

export function Selection(props) {
    const { card, choice, onSelectGenus, onSelectSpecies } = props;
    const { _id, name } = card;
    
    

    return(
        <div>
            <form onSubmit={event => {
                event.preventDefault();
            }}>
                <p>I think {choice} is the {name}'s...</p>
                <SelectButton type="submit" onClick={() => onSelectGenus(_id, choice, 'genus')}>Genus</SelectButton>
                <span> OR </span>
                <SelectButton type="submit" onClick={() => onSelectSpecies(_id, choice, 'species')}>Species</SelectButton>
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
//             url: state.url,
//             seenCards: state.seenCards,
//             cards: state.cards
//     })}
// )(Selection);

// const mapStateToProps = (state) => {
//     const selectedCard = state.cards.find((card) => card._id === state.selection._id);
//     return {
//         card: selectedCard,
//         name: state.name, 
//         genus: state.genus, 
//         species: state.species, 
//         description: state.description, 
//         url: state.url,
//         seenCards: state.seenCards,
//         cards: state.cards
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ chooseGenus, chooseSpecies }, dispatch);
// }

// const mapDispatchToProps = {
//     chooseGenus,
//     chooseSpecies
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Selection);
