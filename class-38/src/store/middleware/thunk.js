export default store => next => action => {
    console.log("store >>> ", store)
    typeof action == 'function' 
    ? action(store.dispatch, store.getState)
    : next(action);

}

    // function(store) {
    //     return function(next) {
    //         return function(action) {

    //         }
    //     }
    // }