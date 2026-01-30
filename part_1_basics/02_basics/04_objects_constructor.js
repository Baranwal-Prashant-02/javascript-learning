// constructor objects 
const tinderuser = new Object() // singleton object
console.log(tinderuser); //{}
const tinderuser1 = {}  // non singleton object
console.log(tinderuser1);  //{}

tinderuser.id ="123abc"
tinderuser.name = "samay"
tinderuser.isloggedIn = false
console.log(tinderuser);  //{ id: '123abc', name: 'samay', isloggedin: false }   

console.log("-----------------------------------------------")

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// { firstname: 'hitesh', lastname: 'choudhary' }
// hitesh
console.log("-----------------------------------------------")

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // it is making object inside the objects 
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // syntax 1 to merge all th objects

const obj3 = {...obj1, ...obj2}  // syntax 2 to merge all th objects
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// jab value database se aata hai to 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// we can access this values as like we access the array
users[1].email

console.log("-----------------------------------------------")

//applying some methods to our object "tinderuser"

console.log(tinderuser);

console.log(Object.keys(tinderuser));  //return array so we can use it further as array
console.log(Object.values(tinderuser)); //return array so we can use it further as array
console.log(Object.entries(tinderuser));  //array ke ander array dega [keys, value] format me

console.log(tinderuser.hasOwnProperty('isLoggedIn'));// check the given property/ attribute present in object or not

/*
{ id: '123abc', name: 'samay', isloggedIn: false }
[ 'id', 'name', 'isloggedIn' ]
[ '123abc', 'samay', false ]
[ [ 'id', '123abc' ], [ 'name', 'samay' ], [ 'isloggedIn', false ] ]
false
*/

console.log("-----------------------------------------------")
// concept of destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // hitesh  //this is absolutly right but in next we learn how to avoid writing again and again full "course.property"
const {courseInstructor} = course
console.log(courseInstructor); //hitesh
//one another way but here we  make short names also and use it when we want to acces 
const {courseInstructor: instructor} = course
console.log(instructor); //hitesh


console.log("-----------------------------------------------")
// API's ka kam --> apna kamdusre ke sir dalna
/*
An API is like a waiter in a restaurant:

You (the client) ask the waiter (API) for a dish (data/service).

The waiter takes your request to the kitchen (server).

The kitchen prepares it and gives it back to the waiter.

The waiter brings it to you.
*/ 

//backend se kuch values aati hai jo phle xml structure me hoti thee jo complex v  hoti te 
// but ab json me aati hai
//format for json data
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//2nd format for json as array of object
// [
//     {},
//     {},
//     {}
// ]
