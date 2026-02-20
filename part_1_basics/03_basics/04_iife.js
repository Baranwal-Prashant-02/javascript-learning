//immediately invoked function expression

/*
--> It's a function which runs immediately after it's created.

--> It's used to create a private scope (like a temporary box where your code won’t affect the rest of the program).

--> NOTE: Always end function calls or statements with a semicolon when you're using an IIFE right after — or wrap the whole IIFE in a block {}


IIFE ek function hota hai jo define hote hi execute ho jaata hai.
Iska use scope isolation, data privacy, aur global namespace pollution se bachne ke liye hota hai.
IIFE hoisted nahi hota kyunki ye function expression hai

Why use it? -->
Avoid polluting global scope (keep variables private).

Initialize code right away (run setup code quickly).
*/

//normal function
function chai(){  
    console.log(`DB connected`);
}
chai(); //db connected

//immediately invoked function

(function hhy(){     //named iife
    console.log(`db disconnected`);  
})();   //db disconnected
 // we can always use terminator because function in js can't even auto terminate to execute the next function just after the previous


//we can also use arrow function

( (name)=> {    //simple / un-named iife
    console.log(`hero heera laal ${name}`);
} ) ("hitesh");  //hero heera laal hitesh

