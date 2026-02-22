const userEmail = "hitesh"   // got user email  -->true
//const userEmail = []       // got user email  --true
//const userEmail = ""       // don't have user email --false
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, BigInt me 0n hota wo v falsy hota, "", null, undefined, NaN

//truthy values (string ke andr kuch v ho truthy value hota hai)
// "0", 'false', " ", [], {}, function(){}


//checking the empty array
const Email = []
if (Email.length === 0) {
    console.log("Array is empty");  //Array is empty
}
  
//cheking the empty object
const emptyObj = {}
    
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");  //Object is empty
}
  

console.log("-------     -------------       --------------       -----------");

// Nullish Coalescing Operator (??): 
//null, undefined uper hi dekhna hot hai enko
let val1;
val1 = 5 ?? 10               //5 -->first value
// val1 = null ?? 10             //10
// val1 = undefined ?? 15        //15
console.log(val1);

val2 = null ?? 10 ?? 20  // 10  -->first value got assigned
console.log(val2);


// Terniary Operator

// condition ? true : false   // syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  //more than 80

