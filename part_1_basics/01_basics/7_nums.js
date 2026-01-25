const score = 400
console.log(score); //400
// go to through chrome console to know all functios of numbers of javascript

const balance = new Number(100) 
console.log(balance);   //[Number: 100]

//tostring is use to convert into string
console.log(balance.toString());  //100

console.log(balance.toString().length);  //3

// tofixed is use to fix how much digit we want after decimal
console.log(balance.toFixed(2));  //100.00

const othernumber = 123.8966
// toPrecision is precise the numbers in given length of digits 
console.log(othernumber.toPrecision(3));  //124
console.log(othernumber.toPrecision(4));  //123.9

const hundreds = 100000

console.log(hundreds.toLocaleString()); //1,00,000
/*The first line uses .toLocaleString() without any locale argument, so it defaults to your system's locale.
If your system locale is set to India (en-IN), then even the default will use Indian-style formatting. */
console.log(hundreds.toLocaleString('en-US')); //100,000
console.log(hundreds.toLocaleString('en-IN')); //1,00,000

/*
output:

400
[Number: 100]
100
3
100.00
124
123.9
1,00,000
100,000
1,00,000

*/

