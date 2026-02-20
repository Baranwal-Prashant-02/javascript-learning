const marvel_hero = ["thor" ,"iron man", "spiderman"]
const dc_hero =["superman", "flash", "batman"]

marvel_hero.push(dc_hero)  // it can't merge 2 array but it make nested array 
console.log(marvel_hero);  //[ 'thor', 'iron man', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// push return the existing array after appends the new array but 
//concat return a new array after mergeing the new array

const newMarvel = marvel_hero.concat(dc_hero)
console.log(newMarvel);  //[ 'thor', 'iron man', 'spiderman', 'superman', 'flash', 'batman' ]

// or we can use SPREAD operator to merge two array
const all_heros =[...marvel_hero, ...dc_hero]
console.log("spread array :", all_heros);
// we got the same output using spread also
//spread array : [ 'thor', 'iron man', 'spiderman', 'superman', 'flash', 'batman' ]

console.log("-----------------------------------------------")


//flat(x) is use to print all the element of array either it is nested or not but its depth is given as input like ..> x
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//depth == Infinity   
// depth: (Optional) The number of levels to flatten.
// If not provided, defaults to 1. 
const real_another_array = another_array.flat(Infinity) // i must be  in capital
console.log(real_another_array);

// if we use 'another_array.flat(1)'
// answer is : [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] 
*/
console.log("-----------------------------------------------");
console.log(real_another_array.toString()); // we are trying to print all the elements of array in one line using comma as seperator
console.log("-----------------------------------------------");
/*
-----------------------------------------------
1,2,3,4,5,6,7,6,7,4,5
-----------------------------------------------
*/

 console.log(Array.isArray("Hitesh"))  //false (because the given input is not an array)
 //Array.from is use to generate an array from given inputs 
 console.log(Array.from("Hitesh"))  //[ 'H', 'i', 't', 'e', 's', 'h' ]

 console.log(Array.from({name: "hitesh"})) //  [] empty array // interesting
 //because Array.from({name: "hitesh"}) ye jan ni para ki keys ko array bnana ya values pairs ko

let score1 = 100
let score2 = 200
let score3 = 300

//Array.of--> returns a new array from a set of elements
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]



