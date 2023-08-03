const events =require('events');
const { EventEmitter } = require('stream');




const emmitor = new events.EventEmitter();

const firstAlert =()=>console.log("alert..");
const secondAlert =()=>console.log("second alert..");
const thirdAlert=()=>console.log("third alert..");

emmitor.on('alert',firstAlert);// Adds a listener at the end of the listeners array for the specified event
emmitor.addListener('alert',secondAlert);//Adds a listener at the end of the listeners array for the specified event. 

//emmitor.once('alert',thirdAlert);
/*
Adds a one time listener to the event.
 This listener is invoked only the next time the event is fired, 
 after which it is removed. Returns emitter, so calls can be chained.

 thats why we  get event listener count 2 only
 if i use on() then i get 3 listener count
*/
emmitor.on('alert',thirdAlert);

emmitor.emit('alert');//  emmit an event

emmitor.removeListener('alert',thirdAlert);// third listener remove now we get 2 listner count
console.log("Event listener count for Alert event : ",EventEmitter.listenerCount(emmitor,'alert'));

/*
removeListener(event, listener)

Removes a listener from the listener array for the specified event. Caution − It changes the array indices in the listener array behind the listener.
*/