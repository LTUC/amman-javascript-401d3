'use strict';

// THis library will help us get user input
const inquirer = require('inquirer');

const net = require('net');

const client = new net.Socket();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

client.connect(PORT, HOST, ()=> {console.log('#####chat got connected####')});

const messages = [];

client.on('data', function(data){ 
    // when the server sends me back any data
    let eventObj = JSON.parse(data);
    if (eventObj.event == "message") {
        console.clear();
       messages.push(eventObj.payload);
    
       messages.forEach(msg=> console.log(msg));
    }
    console.log()

});


let name = ''; // 



// [rawan]: hello there
// [rawan]: good morning
// [rawan]: bye!
function sendMessage(text) {
    console.log('sending', text);
    let message = `[${name}]: ${text}`;
    let event = JSON.stringify({ event: 'message', payload: message });
    client.write(event);
  }
  
  
  // Get Input
  async function getInput() {
    let input = await inquirer.prompt([{ 'name': 'text', 'message': ' ' }])
    sendMessage(input.text);
    getInput();
  }
  
  // Get their name
  async function getName() {
    console.clear();
    let input = await inquirer.prompt([{ 'name': 'name', 'message': 'What is your name?' }])
    name = input.name;
  }
  
  getName();
  getInput()