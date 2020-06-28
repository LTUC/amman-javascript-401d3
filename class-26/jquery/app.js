let state = {};
// input 
let source = $('#stuff-template').html();
let template = Handlebars.compile(source);
// click 
$('#clicker').on('click', handleClick);
$('#wordsInput').on('input', handleWords);
// handleWords reflect the change
function handleWords(event) {
    state.words = $(this).val();
    console.log('__STATE__ : ', state.words);
}

// handleClick split
function handleClick(event) {
    event.preventDefault();
    state.words = state.words.split('').reverse().join('');
    render();
}
//init 
function init() {
    state.words = 'Initial State';
    render(); 
}

// render
function render() {
    $('#stuff').html(template(state));
}

$(function() {
    init();
});
 