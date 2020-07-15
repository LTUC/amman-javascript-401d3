import { createSlice } from '@reduxjs/toolkit';

// create reducer and create actions are done here in createSlice
const peopleSlice = createSlice({
    // createSlice requires a name, an initalState, reducer functions
    name: 'people',
    initialState: [
        {name: 'Ammar AlHariry'},
        {name: 'Isra\'a Othman'},
        {name: 'Ala\'a AlMasri'}
    ],
    reducers: {
        add(state, action) {
            // immer powerful features: creating a draft form state
            // with redux : we do this ...state and then do changes 
            state.push({name: action.payload});
        },
        remove(state, action) {
            return state.filter(person => person.name !== action.payload);
        }
    }
});

export const { add, remove } = peopleSlice.actions;

export const get = () => async dispatch => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const people = await res.json();
    people.results.forEach(person => dispatch(add(person.name)));
}

export default peopleSlice.reducer;