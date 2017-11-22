import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';

// const SelectButton = styled.button`
//     background-color: #ffed64;
//     font-size: 20px;
//     height: 40px;
//     width: 100px;
//     border: 2px solid #ffed64;
//     border-radius: 25px;
// `;

export function Selection(props) {
    const { selectedCard, selection, cards, onSelectGenus, onSelectSpecies } = props;
    const { _id, choice } = selection;
    
    

    return(
        <form className="card-footer" onSubmit={event => {
            event.preventDefault();
        }}>
            {/* <span className="card-footer-item"> */}
                <button className="button is-medium is-outlined is-primary is-pulled-left" type="submit" onClick={() => onSelectGenus(_id, choice, cards)}>Genus</button>
            {/* </span> */}
            {/* <span className="card-footer-item"></span> */}
            {/* <span className="card-footer-item"> */}
                <button className="button is-medium is-outlined is-primary is-pulled-right" type="submit" onClick={() => onSelectSpecies(_id, choice, cards)}>Species</button>
            {/* </span> */}
        </form>
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
