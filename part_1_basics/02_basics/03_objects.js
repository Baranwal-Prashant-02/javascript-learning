//objects 
/*declaration of objects can be done in two ways 
    1. Literals ke jaise
    2. constructor ke jaise (singleton bnta hai)

*/
//object literals

const sym = Symbol("key1")
const Msym =  Symbol("key2")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    sym : "key1",  //This does not store the 'symbol sym' as a key. It uses the string "sym" as the key.
    [Msym] : "key2", //This is the correct way to use a symbol as a key in an object.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

    //by default the names are string type
}

//to way to access the objects
/*1*/console.log(JsUser.email) //hitesh@google.com
/*2*/console.log(JsUser["email"])//hitesh@google.com
console.log(JsUser["full name"])  //Hitesh Choudhary
//console.log(JsUser.full name)  //showing error because we never access  such type object names by using this
console.log(JsUser.sym)  //key1
console.log(typeof JsUser.sym)  //String

console.log(JsUser [Msym])  //key2
//console.log(typeof (JsUser.[Msym]))  //In JavaScript, you cannot use both 'dot' notation and 'bracket' notation together like this.
console.log(typeof JsUser[Msym]);  // string


console.log("-----------------------------------------------")

console.log(JsUser);
/*
output  OBSERVE CAREFULLY
{
    name: 'Hitesh',
    'full name': 'Hitesh Choudhary',
    sym: 'key1',
    age: 18,
    location: 'Jaipur',
    email: 'hitesh@google.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key2)]: 'key2'
}

explanation on ordering the output:
## JavaScript stores object keys in two separate categories internally:

# Key Type	                 # How it's ordered in the object
1. String/Number keys ->>	   Ordered by insertion order (numbers first in numeric order, then strings in insertion order)
2. Symbol keys	      ->>      Always stored separately, and usually listed after all string keys

NOTE: This behavior is by design and ensures Symbols don’t interfere with normal property enumeration (e.g., in for...in, Object.keys, etc.).

*/    

console.log("-----------------------------------------------")

//update the value of object

JsUser.email= "day@gmail.com"
console.log(JsUser.email) // value got update to "dat@gmail.com"

console.log("-----------------------------------------------")


const Ratnesh = {
       name1 : "ratnesh pr singh",
       email1: "ratnesh@gmail.com"
}
Object.freeze(Ratnesh)  // freeze the values of objects of Ratnesh
Ratnesh.email1 = "ranesh@"  // not update b/c value is freezed
console.log(Ratnesh.email1) //ratnesh@gmail.com   which is previous value 

console.log("-----------------------------------------------")

const Ratan = {
    name1 : "ratan",
    email1: "ratan@gmail.com"
}
Ratan.greeting = function(){
    console.log("Hello JS user");
}
Ratan.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name1}`);
}

console.log(Ratan.greeting());
console.log(Ratan.greetingTwo());
/*
Hello JS user
undefined  
Hello JS user, ratan
undefined 

##reason for undefined with output: 
Ratan.greeting() or Ratan.greetingTwo() doesn't return anything — it only console.logs a message.
    so By default, if a function doesn't return a value, it returns undefined.
*/



/*
#creating an object using the built-in JavaScript Object() constructor,
 which is perfectly valid — especially when you want to dynamically create and extend objects.

// constructor Objects(in build "Object()" is used)

const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
  console.log("Hi!");
};

*/
