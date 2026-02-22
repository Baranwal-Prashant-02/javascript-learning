//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is found"); 
    }
    console.log(element); 
}
//console.log(element);  // not executed due to out of scope
console.log("-----------   -----------------   ----------------  -------------");

for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 4; j++) {
    console.log(`Inner loop value ${j} and outer loop ${i}`);
   }  
}


console.log("-----    -----    -------    -------");

for (let i = 1; i <= 5; i++) {
    console.log(`table of : ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + ' = ' + i*j );
   }  
}


console.log("-----    -----    -------    -------");
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);  
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue //here continue pass the cursor to next fresh iteration not on the next line
    }
   console.log(`Value of i is ${index}`);
    
}



