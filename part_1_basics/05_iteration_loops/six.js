//array and object filters
//forEach() is used only for iterating (side effects), not for returning values.

const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item   //for each loop can't return any thing 
} )

console.log(values);
/*
js
ruby
java
python
cpp
undefined  //it is for return value (for each never return in arrays)
*/

console.log("--------          -----------       -----------     ---------");

const mynum =[1,2,3,4,5,6,7,8,9,10]
const newNum = mynum.filter( (num) => num>5 )
console.log(newNum);  //[ 6, 7, 8, 9, 10 ]



/*   //OR we can also write like:

const mynum =[1,2,3,4,5,6,7,8,9,10]   
const newNum = mynum.filter( (num) => {
    return num>5     // if we use scope (curly braces) we have explicitely write return and values here
} )
console.log(newNum);      //[ 6, 7, 8, 9, 10 ]
*/



/*
array.filter( callback )

✔️ The callback returns true or false
✔️ filter() itself returns a NEW ARRAY
filter() uses the callback’s true/false result only as a condition.
It returns the actual elements for which the condition is true, not the boolean values.

JavaScript internally does something like this:

const result = []
for (let i = 0; i < mynum.length; i++) {
  if (mynum[i] > 5) {     // callback returned true
    result.push(mynum[i]) // element is copied //here is how an filter works
  }
}
return result
*/

console.log("--------     -----------    ------------");
console.log("--------     -----------    ------------");

//if we use for each for this array we cant write like  (using same mynum array)
const newNums = []
mynum.forEach( (num) => {
    if (num > 5) {
        newNums.push(num)
    }
} )
console.log(newNums);   //[ 6, 7, 8, 9, 10 ]


console.log("--------     -----------    ------------");
console.log("--------     -----------    ------------");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);

/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

const userBooks2 = books.filter( (bk) => {return bk.publish >=2000})
console.log("userbooks2 :- ", userBooks2);

/*
userbooks2 :-  [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/


const userBooks3 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log("userbooks3 :- ",userBooks3);
/*
userbooks3 :-  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/



