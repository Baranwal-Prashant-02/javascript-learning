let score =33
let score1 ="33"
console.log(typeof score)
console.log(typeof score1)

let value1 = Number(score1) //type conversion, N must be capital in number
console.log(typeof value1)
console.log(value1)

// output:
// number
// string
// number
// 33

let score2 ="33abc"
let value2 = Number(score2) //type conversion
console.log(typeof value2)
console.log(value2)

// output:
// number
// NaN  => not an number 

/*"Since "33abc" contains non-numeric characters (abc), the conversion fails.

When conversion fails, Number() returns NaN (“Not a Number”).

But NaN itself is still of type number in JavaScript.
That’s why typeof value2 gives "number"."*/

let score3 =null
let value3 = Number(score3) //type conversion
console.log(typeof value3)
console.log(value3)
console.log(typeof score3);


// output:
// number
// 0
// object

let score4 =undefined
let value4 = Number(score4) //type conversion
console.log(typeof value4)
console.log(value4)

// output:
// number
// NaN

// notes of conversion:
//  actual      after_conversion in number.
//  "33"    =>    33    
//  "33abc" =>    NaN
//  true    =>    1
//  false   =>    0


//boolean conversion
let isLoggedIn =1          //true
let isLoggedIn1 = ""       //false
let isLoggedIn2 = "name"   //true

let IsbooleanLogedIn = Boolean(isLoggedIn)
console.log(IsbooleanLogedIn);

let IsbooleanLogedIn1 = Boolean(isLoggedIn1)
console.log(IsbooleanLogedIn1);

let IsbooleanLogedIn2 = Boolean(isLoggedIn2)
console.log(IsbooleanLogedIn2);

// output:
// true
// false
// true

//string conversion
let somenumber = 33
let stringNumber =String(somenumber)// s, must be capital
console.log(stringNumber);
console.log(typeof stringNumber);

// output:
// 33
// string




