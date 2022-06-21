const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event',() => console.log('event fired!'))

//init event
myEmitter.emit('event');