export function selection(state = {}, { type, payload }) {
    switch (type) {
        case 'SELECT_CARD':
        return payload;
        case 'RANDOM_CARD': {
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

export function selectCard(cards) {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}

export function makeChoice({ genus, species }) {
    const choiceArray = [genus, species];
    const index = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[index];
}

