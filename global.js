
// var c=1;
// function printHello()
// {
//     console.log("Hello-"+c++);
// }

// const i =setInterval(printHello,1000);

// setTimeout(()=>{clearInterval(i);console.log("stoped.")},9000);
// global 
console.log("current executing file name is "+__filename)
console.log("Current working directory name is "+__dirname)
/*
output :-
current executing file name is C:\Users\Ashish\Desktop\Event in Node js\global.js
Current working directory name is C:\Users\Ashish\Desktop\Event in Node js
*/ 

const os = require('os');
console.log("Home directory is ",os.homedir())
console.log("free memory : ",os.freemem())
console.log("host name: ",os.hostname())
console.log("machine: ",os.machine())
console.log("platform: ",os.platform())
console.log("Total memory: ",os.totalmem())

/*
output
Home directory is  C:\Users\Ashish
free memory :  293396480
host name:  ASHISHPC
machine:  x86_64
platform:  win32
Total memory:  3698143232
*/