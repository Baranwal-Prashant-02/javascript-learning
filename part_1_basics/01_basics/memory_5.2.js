/*
there  are two types of memory used in js
 1- stack 
     it is used for premitive data_types where an copy of data is passed not the original value
     and changes are take place in copy of data 

 2- heap 
     it is used for non-premitive data_types where exact values reference is passed 
     and changes take place in original values
 */

//stack
let myYoutube = "hiteshchaudhary"

let anothername = myYoutube
anothername ="chai"
console.log(anothername);  //chai
console.log(myYoutube);    //hiteshchaudhary
//we see that there is no change in original value(myYoutube)


//heap
let userOne={
    email: "dishu@123", 
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email ="gfg@345"
console.log(userOne.email)
console.log(userTwo.email)
/*
output:
gfg@345
gfg@345

here we see that changes take place in original vlaue
it uses reference of the data stored in heap
*/



