let value =3
let negvalue =-value
console.log(negvalue);  // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //2 power 3
// console.log(2/3);
// console.log(2%3); modulo--> remainder

let str1 = "hello"
let str2 = " hitesh" //start with space

let str3 = str1 + str2
console.log(str3);   // hello hitesh

console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32

// 32 because the first value decides that conversion  is in string or integer 
// so in last console we see that 1+2 are in int form so that it add first then append 2 as a string
// dont usee complex calculation without bracket

console.log(+true); //1, true ka numerical representation
console.log(+"");   //0, empty string return false, here '+' convert it into numerical representation

let gamecounter = 100
++gamecounter // we can also use 
// gamecounter++ 

/*'gamecounter++' → use the value first, then increment
But here, you’re not using the value in an expression, only incrementing it.
After increment → gamecounter becomes 101 */

// here we see they are working exact same but 
// they have different meaning we see in next 
// go through with documentation for prefix and postfix in mdn 
console.log(gamecounter);   // 101


//link to study docs about conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// ✅ Final Values:
// x = 4 → because x++ increases x after assignment

// y = 3 → because y got the value before x was incremented

// 🧠 Remember:
// x++ → return current value, then increment

// ++x → increment first, then return new value
