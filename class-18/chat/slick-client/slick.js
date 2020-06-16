const inquirer = require('inquirer');
const io = require('socket.io-client');
//connect to slick namespace
const slick = io.connect('http://localhost:3000/slick');

const messages = [];
let name = '';
let activeInput = true;
let channel = 'general'; 
slick.emit('join', channel);


// Update our global channel variable
slick.on('joined', (joinedChannel) => {
  channel = joinedChannel;
  beSlick();
});

// When the server sends out a list of all messages, render them
slick.on('message', (payload) => {
  console.clear();
  messages.push(payload);
  messages.forEach((message) => console.log(message));
  console.log('');
});

// Get user input
async function beSlick() {
  // Need to check/set a flag, otherwise we'll recursively call this async function on every reload
  if (activeInput) {
    return;
  }
  activeInput = true;
  const response = await inquirer.prompt([
    {
      prefix: '',
      name: 'text',
      message: `----------------\n ${channel}`,
    },
  ]);

  const command = response.text.toLowerCase().split(' ')[0];
  switch (command) {
    case 'quit':
      process.exit();
    case 'join':
      const room = response.text.toLowerCase().split(' ')[1];
      activeInput = false;
      slick.emit('join', room);
      break;
    default:
      activeInput = false;
      slick.emit('message', `[${name}]: ${response.text}`);
      beSlick();
      break;
  }
}
async function getName() {
  console.clear();
  const input = await inquirer.prompt([
    { name: 'name', message: 'What is your name?' },
  ]);
  name = input.name;
  activeInput = false;
  beSlick();
}
getName();
