// const choise = 'coffe'
let massge;
// switch (choise) {
//     case 'coffe':
//         massge = 'Your choise is coffe'
//         break;
//     case 'tea':
//         massge ='Your choise is tea'
//         break
//     case 'juice':
//         massge ='Your choise is juice'
//         break
//     default:
//         break;
// }

// console.log(massge);
const dayOfWeek = 'Monday';


// switch (dayOfWeek) {
//     case 'Monday':
//     case 'Tuesday':
//     case 'Wensday':
//     case 'Thursday':
//     case 'Friday':
//         massge = 'Its a work day ' + dayOfWeek
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         massge = 'Its a weekend ' + dayOfWeek
//         break
//     default:
//         massge = 'its not day of week'
//         break;
// }
// console.log(massge);

//const countOfTheMonth = 9;

// if (countOfTheMonth >=3 && countOfTheMonth <= 5) {
//     massge = 'Spring'
// } else if(countOfTheMonth >=6 && countOfTheMonth <=8) {
//     massge = 'Summer'
// }else if (countOfTheMonth >=9 && countOfTheMonth <=11) {
//     massge = 'Fall'
// } else if (countOfTheMonth === 12 || countOfTheMonth <=2){
//     massge = 'Winter'
// }
// console.log(massge);

// const color = 'Red'
// switch (color) {
//     case 'Red':
//         massge = 'Stop'
//         break;
//     case 'Yellow':
//         massge = 'Wait'
//         break
//     case 'Green':
//         massge = "Go"
//         break
//     default:
//         break;
// }
// console.log(massge);

let num1 = 1;
let num2 = 0;
let op = '/';
let answer;
if (num2 === 0 && op ==='/') {
    console.log('You cant delit on 0 ');
} else {
    switch (op) {
        case '/':
            answer = num1 / num2
            break;
        case '*':
            answer = num1 * num2
            break;
        case '+':
            answer = num1 + num2
            break;
        case '-':
            answer = num1 - num2
            break;
        default:
            break;
    }
} 
console.log(answer);