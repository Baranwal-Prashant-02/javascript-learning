// Math is a built-in JavaScript object, not a class and not a constructor.
console.log(Math);//Object [Math] {}  // we see more function inside this on chrome console
console.log(Math.abs(-4));  //4
console.log(Math.round(45.4));  //45
console.log(Math.round(45.5));  //46

console.log(Math.ceil(49.5));  //50
console.log(Math.floor(50.4));  //50

console.log(Math.min(45,55,46,30));  //30
console.log(Math.max(45,55,46,30));  //55

// math.random()  by default it return the values between 0-1  only
// although we can use this to take outcomes in range also

console.log(Math.random());  // value b/t 0--1 with decimal
console.log(Math.random() *10 + 1);  
/*
explanation:
 we multiply the random number (whichi is in range 0--1) with 10 to get an exact digit b/t 1--9
 although we can see such case as:
 random number = 0.046543  and if we multiply with 10 then also it give 0. somthing 
 so to avoid this error we use random number *10 + 1 (either an random number *10 gives 0 then also we get an minimum number = 1.something)
*/
console.log((Math.random() *10 )+ 1); // formatting to avoid BODMAS calculation

console.log(Math.floor(Math.random() *10 + 1)); // to get only the floor value of random generated value

// to print the random value in given range
const min =10  //declaration of min max range
const max =20
/* 
formula to get random digit b/w ranges: Math.floor(Math.random()*(max-min + 1))+ min  
*/
console.log(Math.floor(Math.random()*(max-min + 1))+ min);

/*
output
Object [Math] {}
4
45
46
50
50
30
55
0.8877305461847647   //random
5.7321535859395025   // random *10 + 1
1.3174168722511683   // (random * 10) + 1
3                    //floor((random * 10) + 1)
10                   // random value b/w range
*/



