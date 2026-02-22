//maps implementation 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);
// // [
// //     11, 12, 13, 14, 15,
// //     16, 17, 18, 19, 20
// // ]

console.log("--------------------------------------");
//map chaining 

const newnums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)    //it work over the updated(by uper condition) values of array
                .filter( (num) => num >= 40)  //it work over the updated(by uper condition) values of array
    console.log(newnums);


//just for READING ONLY NOT OUTPUT//  num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*     
1st map .map((num) => num * 10 ) gives:
[
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
] 

if we add one more map after previous ".map((num) => num * 10 ) .map( (num) => num + 1)"  which perform 1st condition then after 2nd condtoon which gives:
[
    11, 21, 31, 41,  51,
    61, 71, 81, 91, 101
  ]
if we add one filter after previous two map condtions ".map((num) => num * 10 ) .map( (num) => num + 1) .filter( (num) => num >= 40)"
which perform 1st condition then after 2nd and filter accordingly which gives:
  [
    41, 51,  61, 71,
    81, 91, 101
  ]

  */