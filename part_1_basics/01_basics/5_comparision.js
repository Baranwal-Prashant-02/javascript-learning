// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comparision may or may not give the predictable result
// so to ensure predictable result we must perform comparision b\w same data types

console.log("2" > 1);   //true
console.log("02" > 1);  //true

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true

// the reason behind true is that an equality check == and comparisions < > <= >= work differently
// as comparisons convert null to a number treating it as 0.
// that's why null>0, nul==0 is false and null>=0 is true.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//output remain: false for all comparisons with undefined

// === --> strictly check use to check datatypes also and then compare
// if data tpye same then comparison perform if not so false

console.log("2" === 2);  //false