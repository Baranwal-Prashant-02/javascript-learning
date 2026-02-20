//scope in js -->{} with function and if-else block

// NOTE: var is function-scoped, let & const are block-scoped//

/*
Why Not Use var?
--> let and const are block-scoped, meaning they behave more predictably inside loops, conditionals, etc.

--> They also avoid accidental redeclarations, which helps prevent bugs.
*/

console.log(a); // ✅ undefined — `var` is hoisted
var a = 5;

/**
BEHIND THE SEEN (line by line execution) how actually hoisting works
var a;          // hoisted //the declaration comes on top
console.log(a); // then print the a which is only declared not assigned any value
a = 10;         // here the exaclty the vallue got assigned just after the console.log()
*/

// console.log(b); // ❌ ReferenceError — `let` is not usable before declaration
// let b = 10;

console.log("-------   -------  -------- ------------------");

var c = 300
let d = 76
if (true) {
    let d = 10
    var c =80 //Actually updates the same c declared above.  It is NOT a new variable. because var is function-scoped(then (same global variable updated))
    console.log("INNER: ", d);   //10
}

console.log("outer d: ", d); //76
console.log("c = ",c);  //its value is same as the value accessing inside the if block  
/*
var ignores block scope
It attaches to global scope (if not inside function)
Using var inside block modifies outer variable (if not inside function).
*/

console.log("----------------------------------------------");

//Scope level and mini hoisting

function one(){
    const userName = "sunder pichai"

    function two(){
        const website ="youtube"
        console.log(userName);
        console.log(website);
        
        
    }
   // console.log(website);  we can't access local values out of scope
    two()           
}
one()         // sunde87765r pichai // youtube
/*
• Inner functions can access outer variables
• Outer scope cannot access inner variables
• Scope lookup happens from inner → outer → global
• Function declarations are hoisted inside their scope
• This behavior enables closures
*/

console.log("-------   -------  -------- ------------------");

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);  //hitesh youtube
    }
    // console.log(website);  //out of scope can't access
}

// console.log(username);   //out of scope can't access



//++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++
console.log(addone(5)) //6  //executed due to hoisting feature in functions 
function addone(num){
    return num + 1
}



addTwo(5)    // give error when we access or print prior the declaration of function 
const addTwo = function(num){  // here just minute difference is that the function is aasigned in an variable named addTwo and hoisting can't work over variables
    return num + 2
}
