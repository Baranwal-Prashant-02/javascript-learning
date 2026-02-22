//for each() loop :  The forEach() method is used with arrays (or array-like objects). It executes a provided callback function once for each array element.
/*
array.forEach(function(element, index, array) {
  // Your code here
});
 
Parameters:
element → The current item being processed

index (optional) → The index of the current element

array (optional) → The original array itself

*/

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){   //callback hai ye, to is function ka koi nam ni hoga
    console.log(val);
} )
/*
js
ruby
java
python
cpp
*/


// arrow function
console.log("------------   -----------------");

coding.forEach( (item) => {
    console.log(item);
} )
/*
js
ruby
java
python
cpp
*/

console.log("------------      ---------------   -------------    ---------");

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

/*
js
ruby
java
python
cpp
*/
console.log("------------      ---------------   -------------    ---------");
console.log("------------      ---------------   -------------    ---------");

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/
console.log("------------      ---------------   -------------    ---------");
console.log("------------      ---------------   -------------    ---------");

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName );
} )


// javascript
// java
// python