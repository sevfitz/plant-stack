import * as actions from './constants';
import store from '../store/index';


// TODO: get choose_genus and choose_species working, then refactor to make_choice for both
// make_choice: grade the selection, save the selection, check to see if that plant set is complete, if complete push to show in answer display, initiate random_card choice and display next card
export function selection(state = {}, { type, payload }) {
    switch (type) {
        case actions.USER_CHOICE: {
            const gradedCard = gradeChoice(payload);
            // CHECK THIS displayCards array - doesn't exist yet
            if(gradedCard.hasOwnProperty('genusCorrect') && gradedCard.hasOwnProperty('speciesCorrect')) {
                // state.displayCards.push(gradedCard);
                console.log('saw this card both times:', gradedCard);
            }
            return {
                payload
            };
        }
        case actions.RANDOM_CARD: {
            const selectedCard = selectCard(payload.cards);
            return {
                _id: selectedCard._id,
                choice: makeChoice(selectedCard)
            };
        }
        default:
            return state;
    }
}

export function cards(state = [], { type, payload }) {
    switch (type) {
        case actions.GET_CARDS:
            return payload;
        case actions.ADD_CARD:
            return [
                ...state,
                payload
            ];
        default:
            return state;
    }
}

export function seenCards(state = [], { type, payload }) {
    switch (type) {
        case actions.ADD_TO_SEEN:
            return [
                ...state,
                payload
            ];
        default:
            return state;
    }
}

export function selectCard(cards) {
    const index = Math.floor(Math.random() * cards.length);
    if(cards[index].hasOwnProperty('speciesCorrect') && cards[index].hasOwnProperty('genusCorrect')) selectCard(cards);
    return cards[index];
}

export function makeChoice({ genus, species }) {
    const choiceArray = [genus, species];
    const index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
}

export function gradeChoice(payload) {
    const cards = store.getState().cards;
    const { _id, choice, userSelection } = payload;
    const cardUnderTest = cards.find((card) => card._id === _id);
    const wasCorrect = cardUnderTest[userSelection] === choice;
    cardUnderTest[`${userSelection}Correct`] = wasCorrect;
    return cardUnderTest;
}


// export function getHasErrored(state = false, { type, hasErrored }) {
//     switch (type) {
//         case actions.GET_HAS_ERRORED:
//             return hasErrored;
//         default:
//             return state;
//     }
// }

// export function cardsAreLoading(state = true, { type, areLoading }) {
//     switch (type) {
//         case actions.CARDS_ARE_LOADING:
//             return areLoading;
//         default:
//             return state;
//     }
// }

// export function seenCards(state=[], { type, payload }) {

// }

