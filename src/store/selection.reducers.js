export function selection(state = {}, { type, payload }) {
    console.log('type is', type);
    switch (type) {
        case 'CHOOSE_GENUS':
            console.log('chose genus state', state, 'payload', payload);
            
            return payload;
            case 'CHOOSE_SPECIES':
            console.log('chose species state', state, 'payload', payload);
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
