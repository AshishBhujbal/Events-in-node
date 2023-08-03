/*
Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's necessary to handle octet streams. Node provides Buffer class which provides instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

Buffer class is a global class that can be accessed in an application without importing the buffer module.
*/
var buff =new Buffer.alloc(26);

// cap case
var ch =65;
for(i=0;i<26;i++)
{
    buff[i]=ch+i;
}
console.log(buff.toString());// o/p =>ABCDEFGHIJKLMNOPQRSTUVWXYZ

// small case
var ch =97;
for(i=0;i<26;i++)
{
    buff[i]=ch+i;
}
console.log(buff.toString());// o/p =>abcdefghijklmnopqrstuvwxyz

// working with string

var strbuff =new Buffer.from("This is node js Buffer class example.");
console.log(strbuff.toString());//o/p =>This is node js Buffer class example.

// buffer class instance have some methods

var substr =strbuff.slice(0,3); // first indext position include ,second index position exclude
console.log(substr.toString());// o/p => Thi

// concat Buffer.concat([b1,b2,b3,...])
var fisrName =new Buffer.from("ashish");
var lastName =new Buffer.from(" bhujbal");
var fullName =Buffer.concat([fisrName,lastName]);// it takes list of buffer
console.log("Full Name:",fullName.toString());

/*
Compare Buffers
Syntax
Following is the syntax of the method to compare two Node buffers −

buf.compare(otherBuffer);
Parameters
Here is the description of the parameters used −

otherBuffer − This is the other buffer which will be compared with buf

Return Value
Returns a number indicating whether it comes before or after or is the same as the otherBuffer in sort order.
*/

console.log(fisrName.compare(lastName));//1
console.log(lastName.compare(fisrName));//-1