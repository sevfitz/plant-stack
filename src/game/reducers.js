import * as actions from './constants';


export function selection(state = {}, { type, payload }) {
    switch (type) {
        case actions.CHOOSE_GENUS:
            // console.log('chose genus state', state, 'payload', payload);
            // TODO: use state to look up plant; then do something and return that
            return payload;
        case actions.CHOOSE_SPECIES:
            // console.log('chose species state', state, 'payload', payload);
            return payload;
        case actions.RANDOM_CARD: {
            const selectedCard = selectCard(payload.cards);
            // console.log('random card state', state, 'random card payload', payload);
            return {
                _id: selectedCard._id,
                choice: makeChoice(selectedCard)
            };
        }
        default:
            return state;
    }
}

export function selectCard(cards) {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}

export function makeChoice({ genus, species }) {
    const choiceArray = [genus, species];
    const index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
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


export function getHasErrored(state = false, { type, hasErrored }) {
    switch (type) {
        case actions.GET_HAS_ERRORED:
            return hasErrored;
        default:
            return state;
    }
}

export function cardsAreLoading(state = true, { type, areLoading }) {
    switch (type) {
        case actions.CARDS_ARE_LOADING:
            return areLoading;
        default:
            return state;
    }
}

// export function seenCards(state=[], { type, payload }) {

// }

export function cards(state = [], { type, payload }) {
    switch (type) {
        case actions.GET_CARDS:
            console.log('in cards reducer returning with payload:', payload);
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