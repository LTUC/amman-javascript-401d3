let initialState = {
    totalVotes : 0
};

export default (state = initialState, action) => {
    let {type, payload} = action;
    
    switch(type) {
        case 'INCREMENT':
            console.log("INCREMENT from total votes  <<<<<<<< ")
            return payload.disabled ? state : {totalVotes:  state.totalVotes + 1}
        
        case 'RESET':
            return initialState;

        default:
            return state;
    }
};

export const increment = (person) => {
    return {
        type: 'INCREMENT',
        payload: person
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
}

