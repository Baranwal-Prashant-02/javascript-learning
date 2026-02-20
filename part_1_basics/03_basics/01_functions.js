//functions

function myname(){
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("r");   
}
//myname  //--> reference   // says that the function is exist only 
myname()  //-> execution

// when we pass any thing in declaration function(.....) known as Parameter
//  when we pass values in calling or execution of function(....) is known as arguments

function addTwo(number1,number2){
    console.log(number1 + number2);
    
}
addTwo(2,5) //7
addTwo(3,null) // 3
addTwo(3,"4")  //34
addTwo("2","4") //24

console.log("------------------------------");

//intresting 
const result1 = addTwo(2,3)  //5
console.log("result: ",result1);  //result:  undefined   WHY???   //because funtion() is not returned any thing 

console.log("------------------------------");

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //here we not get exactly the output because it just return the result not print it

console.log("Result: ", result); //8 // here result contain an returned value

console.log("------------------------------");

function loginUserMessage (username){
    if(!undefined){
        console.log("enter the number please");// this will printed whenever the function is called
        //return    //if we use an return here inside the if scope the next line are ignored(not execute) and function got terminated
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("")); // just logged in // this o/p is started with one spaces
console.log(loginUserMessage("hitesh")); //hitesh just logged in
console.log(loginUserMessage()); //  it gives an "undefined just logged in" output not the null value

console.log("------------------------------");

function UserMessage (username= "sam"){
    return `${username} send message`
}
console.log(UserMessage());  // it prints the parameter given with the declaration
console.log(UserMessage("rudra"));  // it overwrite the parameter by given argument


console.log("----------------------------------------------");

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200 , 400)); // it print the first value :200

function calculateCart(...num2){  // it help to retrun an array of all values
    return num2
}
console.log(calculateCart(200 , 400)); //[ 200, 400 ]

console.log("------------       ----------------------     --------------");

// passing the object as a arguments
const user = {
    username: "hitesh",
    price: 199   //if we change it to prices it give undefined while execution because inside function we use "anyobject.price" to access, javaScript looks for a key named price
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Username is hitesh and price is 199

//another way to pass an objects

handleObject({
    username: "ram",
    price: 65
})                       //Username is ram and price is 65


//passing arrays as arguments
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]  //index 1 
}

console.log(returnSecondValue(myNewArray));  //400
//2nd way to pass an array as argument
console.log(returnSecondValue([300,500,600,800]));// direct value as an argument
