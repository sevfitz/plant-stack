export function chooseGenus(_id, displayed, chose) {
    console.log('chosegenus in actions');
    return (dispatch) => {
        dispatch({
            type: 'CHOOSE_GENUS',
            payload: {
                _id: _id,
                displayed: displayed,
                chose: chose
            }
        });        
    }
} 

export function chooseSpecies(_id, displayed, chose) {
    console.log('chosespecies in actions');
    return (dispatch) => {
        dispatch({ 
            type: 'CHOOSE_SPECIES', 
            payload: { 
                _id: _id, 
                displayed: displayed, 
                chose: chose 
            } 
        });
    }
}