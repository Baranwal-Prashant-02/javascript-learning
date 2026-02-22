//if else 
//var ka scope globaly accepted hai so avoid to use
const isuserLoggedin = true
if(isuserLoggedin){
    console.log("yes logged in" )   //got executed

}

// comparision operator
// <, >, <=, >=, ==, != and 
//!== it is used to check the negative sign
// === 'strict equal ' whic is used to compare digits as well as data type also

if(2==="2"){   // not executed because data type is different 
    console.log("executed");
}

if(2=="2"){   // executed because of == which does not perform strict check 
    console.log("executed");
}

console.log("--------------     ------------------");

const temperature = 20
if(temperature < 40){
    console.log("yes temprature less than 40"); 
}
console.log("execute all time because it is out of if block it never behave like else ");

/*
yes temperature less than 40
execute all time because it is out of if block it never behave like else
*/

console.log("------    ---------    -----------     ---------");

const temp = 47
if(temp < 40){
    console.log("yes temp less than 40"); 
}
else{
    console.log("temp is greater");
    
}
console.log("always executed ");
/*
temp is greater
always executed
*/

// using implicit approach 
if (2==2) console.log("hitesh ");   //hitesh  
// NOTE: here in implicit we can write multiple line using comma seperation but it is not good practice and
// ensure use of terminator ';' in last statement of if block

//we can also use it as 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");  //notexecuted(2!=3) 
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


