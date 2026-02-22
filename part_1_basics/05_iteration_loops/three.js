//higher order array loops
//for of : for...of works on iterables, like arrays, strings, maps, sets, etc., but not on regular objects which lack an iterator

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

console.log("---------    ------------    ----------------");

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

console.log("---------    ------------    ----------------");

//maps ye v apne ap me ek objects hote hai   same array jese but iteration different hoti hai
const map = new Map()
map.set('in', "india")
map.set('usa', "united state of america") 
map.set('Fr', "France")
map.set('in', "india")  //in maps there is no entry for any repeated keys 
console.log(map);
/*
Map(3) {                   //Map(3) shows there is only 3 entries or size 
  'in' => 'india',
  'usa' => 'united state of america',
  'Fr' => 'France'
}
*/
console.log("---------    ------------    ----------------");
for (const key of map) {
    console.log(key);   
}

/*
[ 'in', 'india' ]
[ 'usa', 'united state of america' ]
[ 'Fr', 'France' ]
*/
console.log("---------    ------------    ------------");

for (const [key, value] of map) {
    console.log(key, ':-', value);   
}

/*
in :- india
usa :- united state of america
Fr :- France
*/
console.log("---------------------    ----------------");

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//NOTE for...of loop is not working on objects  and objects are not iteratable in such way
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 


/*
✅ Correct way to iterate over objects:

1. Using for...in (enumerates keys):

for (const key in myObject) {
  console.log(key, ':-', myObject[key]);
}


2. Using Object.entries() with for...of:

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ':-', value);
}

NOTE:- Object.entries(myObject) returns an array of [key, value] pairs, which is iterable, so for...of works here.

*/

