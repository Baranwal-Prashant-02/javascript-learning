//reduce 
//accumulator and current values
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)  //here zero is given as an starting value for accumulator

console.log(myTotal);
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6  // as a final value of acc + current value
*/
console.log("---------------------------------------------");

const myNums2 = [1, 2, 3]
const myTotal2 = myNums2.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal2);  //this also return 6 as a final return



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);  //22996
