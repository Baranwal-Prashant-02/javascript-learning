// array

/*
--> JavaScript arrays are resizable and can contain a mix of different data types
    must be accessed using non-negative integers (or their respective string form) as indexes.

--> JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on.

--> JavaScript array-copy operations create shallow copies. 
    (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

SHALLOW COPY --> A shallow copy of an object is a copy whose properties share the same references
                 (point to the same underlying values) as those of the source object from which the copy was made.

DEEP COPY --> A deep copy means making a completely independent copy of an object — even the stuff inside it (like other objects or arrays).
              So if you change something in the original, the copy won’t be affected — and vice versa.                 

*/

const myArr = [1,2,3,4,5]
    //or
//const myArr = new Array(1,2,3,4,5)
console.log(myArr);

const myHeros = ["shaktiman", "benten", "chota bheem"]
console.log(myHeros);

console.log("-----------------------------")
// array methods 
//push
myArr.push(6)
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

myArr.push(8)
console.log(myArr);  //[ 1, 2, 3, 4, 5, 6, 8 ]

myArr.pop()  // it delete the last element of array
console.log(myArr);[ 1, 2, 3, 4, 5, 6 ]

console.log("-----------------------------")

const myArray = [0,2,4,6,8]
myArray.unshift(9)  // it add the given value at [0] index of myArray
console.log(myArray);  //[ 9, 0, 2, 4, 6, 8 ]
myArray.shift()  // it remove the first element from updated myArray
console.log(myArray);  //[ 0, 2, 4, 6, 8 ]


console.log(myArray.includes(2)); //true
console.log(myArray.includes(10));  //false
console.log(myArray.indexOf(2));   // 1 (index of 2 in myAray)


console.log("-----------------------------")
console.log(myArray);   //[ 0, 2, 4, 6, 8 ]
const newMyarray = myArray.join()  // it join all elementys of array and make an string with (, ) seperated
console.log(newMyarray);   //0,2,4,6,8

console.log(typeof newMyarray);  //string 

console.log("-----------------------------------------------")

// slice and splice

console.log("A : ", myArray);  //A :  [ 0, 2, 4, 6, 8 ]

const myn1 = myArray.slice(1, 3)

console.log(myn1);            //[ 2, 4 ]
console.log("B : ", myArray);  //B :  [ 0, 2, 4, 6, 8 ]


const myn2 = myArray.splice(1, 3)

console.log(myn2);  //[ 2, 4, 6 ]
console.log("C : ", myArray);   //C :  [ 0, 8 ]

 //slice (1,4) only extract the value from array(start from index 1 and end on 3 never include last index of range) but never change the original array
 // but splice (1,4) extract the value from array(start from index 1 and  include last index of range as 4th also) and change the original array

/*
A :  [ 0, 2, 4, 6, 8 ]
[ 2, 4 ]
B :  [ 0, 2, 4, 6, 8 ]
[ 2, 4, 6 ]
C :  [ 0, 8 ]
*/
