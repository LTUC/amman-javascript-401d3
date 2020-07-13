let initialState = [
    {name: 'Ammar Al Hariry', votes: 0, disabled: false},
    {name: 'Isra\'a Othman', votes: 0, disabled: false},
    {name: 'Ala\'a AlMasri', votes: 0, disabled: false}
]

export default (state = initialState, action)=> {
    let { type, payload } = action;
    
    switch (type) {
        case 'INCREMENT':
            return state.map(candidate => {
                if (candidate.name == payload.name) {
                    return {name: candidate.name, votes: candidate.votes+1, disabled: candidate.disabled}
                }
                return candidate;
            })
        case 'DISABLE': 
            return state.map(candidate => candidate.name == payload.name ? {...candidate, disabled:true} : candidate);   
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const increment = (person) => {
    return {
        type: 'INCREMENT',
        payload: person
    }
}

export const disable = (person) => {
    return {
        type: 'DISABLED',
        payload: person
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}