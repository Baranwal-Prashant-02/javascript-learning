
//SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"   // we can take numbers aslo

switch (month) {
    case "jan":                //we can also use for numbers like 'case 3:' no need to write int value in " "
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}