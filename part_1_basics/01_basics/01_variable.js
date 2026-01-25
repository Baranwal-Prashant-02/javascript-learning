// let x;              // Declaration
// let x = 10;         // Declaration + Initialization


const accountId = 23456
let accountEmail ="abc@gmail.com"
var accountPassword = "11112"
accountCity = "jaipur"  //js allowed this syntax but not a good habbit so don't use 
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity])
console.log("hello duniya");
console.log(accountState);//undefined


//accountId = 22322   // this is not allowed in js  ie updating the const value


accountEmail ="ahhgc@gmail.com"
accountPassword = "55442"
accountCity = "delhi"

// here we see another table which shows all values are changable except the const one 
console.table([accountId, accountEmail, accountPassword, accountCity])

/*
preffered not to use 'var' because of the issue in block and functional scope
*/



//output:

// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 23456           │
// │ 1       │ 'abc@gmail.com' │
// │ 2       │ '11112'         │
// │ 3       │ 'jaipur'        │
// └─────────┴─────────────────┘
// hello duniya
// undefined
// ┌─────────┬───────────────────┐
// │ (index) │ Values            │
// ├─────────┼───────────────────┤
// │ 0       │ 23456             │
// │ 1       │ 'ahhgc@gmail.com' │
// │ 2       │ '55442'           │
// │ 3       │ 'delhi'           │
// └─────────┴───────────────────┘