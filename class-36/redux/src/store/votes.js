let initialState = {
    candidates: [
        {
            name: 'Ammar Al-Hariry',
            votes: 0
        },
        {
            name: 'Isra\'a Othman',
            votes: 0
        },
        {
            name: 'Ala\'a AlMasri',
            votes: 0
        }
    ],
    totalVotes: 0 
};

// reducer : switch case
export default (state = initialState, action) => {
    let {type, payload} = action; // destructuring
    // let type = action.type
    // let payload = action.payload
    
    switch(type) {
        case 'INCREMENT':
            let totalVotes = state.totalVotes + 1;
            let candidates = state.candidates.map(candidate=> {
                if (candidate.name == payload) {
                    return { name: candidate.name, votes: candidate.votes + 1};
                }
                return candidate;
            });

            // let candidates = state.candidates.map(candidate => candidate.name == payload ? {...candidate, votes: candidate.votes+1} : candidate);
            
            return {candidates, totalVotes}

        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
