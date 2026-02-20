//implicit and explicit return in arrow function


const user = {
    username : "hitesh",
    price:  999,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this) 
    }
}
user.welcomemessage()  //hitesh , welcome to website
user.username = "sam"   //access value from current context
user.welcomemessage()  //sam , welcome to website


console.log(this); //{}
//node environment mein 'this' refer to empty objects  because global ke andr koi context ni hai
//The value of this depends on how a function is called, not where it is written
/**
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
{}  //output for outside console.log(this)
*/
console.log("-------------   -----------------   ---------------------")
/*

function chai(){
    let username = "hitesh"
    console.log(this);  //eske andr bht sare values milti hai this ke andr jb hum function ke andr use krte
    //console.log(this.username);    //undefined  // because 'this' context is valid in objects we are not able to use this in function
}
    //in this case, this refers to the global object (window in browsers, global in Node.js), but since username is a local variable (not attached to this), this.username is undefined.

chai()

*/


// try anaother type of function declaration
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);    // gives undefined 
// }
    //this is just a different way to write a regular function. this still points to the global object, so again, this.username is undefined.
// chai()



// here we trying arrow function

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);  //undefined 
    console.log(this);  //{} 
}
chai()
/**
Normal function → this banata hai
Arrow function → this borrow karta hai

Arrow functions do not bind their own this. Instead, they inherit this from the enclosing scope — which, in the top-level context, is typically the global scope.

But in Node.js, the top-level this is not the global object — it's an empty object {}. So you're seeing:

this.username → undefined (no username property on {})

console.log(this) → {}


 */



console.log("-------------   -------    ----------");

//basic arrow function

const addTwo = (num1, num2) => {
    return num1 + num2   //here we explicitely write the return keyword
}
console.log(addTwo(2,5));   //7

//implicit return arrow function
//statement in one line and no need to write return in this because it implecitely assume that returned value is this after the =>

const addThree = (num1, num2, num3) => (num1 + num2 + num3) 
console.log(addThree(2,3,4)); //9

// if we want to return an object in  implicit arrow function

const addT = (num1, num2, num3) => ({username : "hitesh"}) 
console.log(addT(1,2,3));  //returning { username: 'hitesh' }


