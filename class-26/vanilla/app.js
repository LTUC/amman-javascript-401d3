// State: an object :
// in Memory State of Variables that holds data of my app.
let state = {}; 

let button = document.getElementById("clicker");
button.addEventListener('click', handleClick );

let input = document.getElementById("wordsInput");
input.addEventListener('input', handleWords);

function handleWords(e) {
    // keep track of user input binded to state.words.
    state.words = e.target.value;
    console.log("__STATE__ : ", state.words);
}

function handleClick(event) {
    // reverse the words and update the container (render)
    event.preventDefault(); // prevent page refresh in our case we dont have page refresh
    state.words = state.words.split('').reverse().join('');
    // ['a', 'b', 'c']
    // .reverse()
    // ['c', 'b', 'a']
    render();
}

function init() {
    state.words = 'Initial State';
    render();
}

function render() {
    // words container and update the text content
    document.getElementById('words').textContent = state.words;
}


init();