// var fs = require('fs')

// var data ="welcome to file hadling"

// fs.writeFile("ashish.txt",data,(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("written success");
// })

// fs.readFile("ashish.txt",'utf-8',(err,d)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }

//     console.log(d);
// })

const readline =require('readline');

const rl =readline.createInterface(
    {input:process.stdin,
    output:process.stdout}
)

var data;
rl.question("Enter Somthing: ",(d)=>{
  console.log(d)
  rl.close();
})

