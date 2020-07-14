import superagent from 'superagent';


let api = 'https://pokeapi.co/api/v2/pokemon'; 

// this dispatch is not the "dispatch" from redux
export const getRemoteData =() => dispatch => {

    // call my data 
    return superagent.get(api)
        .then(data => {
            // dispatch the action getAction
            dispatch(getAction(data.body))
        });
}

export const putRemoteData = (id, data) => async dispatch => {
    let response = await (await superagent.put(`${api}/${id}`)).send(data);
    // dispatch action for the update
    // dispatch(putAction(response))
    // console.log(response)
}

// we are not dispatching the obj
// dispatch({
//     type: 'GET',
//     payload: payload
// })

// we are dispatching the function of the action
// dispatch(getAction())

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}