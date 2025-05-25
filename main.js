//1- Write a program that allow to user enter number then print it

// var userNumber = Number(window.prompt("please enter your number"));
// console.log(userNumber);

/*************************************************** */

/* 2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no*/

// var userNumber = Number(window.prompt("please enter your number"));

// if (userNumber % 4 == 0 && userNumber % 3 == 0) {
//   console.log("yes it can be devided by 3 and 4");
// } else {
//   console.log("No it can't be devided by 3 and 4");
// }
/************************************************************** */

// 3- Write a program that allows the user to insert 2 integers then print the max

// var firstNumber = window.prompt("please enter the first number?");
// var secondNumber = window.prompt("please enter the second number?");

// if (firstNumber == null || secondNumber == null) {
//   console.log(
//     "you can't leave the field empty try again and enter a valid number"
//   );
// } else if (Number(firstNumber) > Number(secondNumber)) {
//   console.log(Number(firstNumber));
// } else if (Number(secondNumber) > Number(firstNumber)) {
//   console.log(Number(secondNumber));
// } else if (Number(firstNumber) == Number(secondNumber)) {
//   console.log("the 2 numbers are equal");
// } else {
//   console.log("please enter a valid Number");
// }

/*************************************************** */

//  -4 Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.
// var userNumber = Number(window.prompt("Please enter your number"));

// if (userNumber < 0) {
//   console.log("Negative");
// } else if (userNumber >= 0) {
//   console.log("positive");
// } else {
//   console.log("not a Number");
// }

/************************************** */
// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var firstNumber = window.prompt("please enter the first number?");
// var secondNumber = window.prompt("please enter the second number?");
// var thirdNumber = window.prompt("please enter the third Number ");

// if (firstNumber == null || secondNumber == null || thirdNumber == null) {
//   console.log(
//     "you can't leave the field empty try again and enter a valid number"
//   );
// } else if (
//   Number(firstNumber) > Number(secondNumber) &&
//   Number(firstNumber) > Number(thirdNumber)
// ) {
//   console.log(Number(firstNumber));
// } else if (
//   Number(secondNumber) > Number(firstNumber) &&
//   Number(secondNumber) > Number(thirdNumber)
// ) {
//   console.log(Number(secondNumber));
// } else if (
//   Number(thirdNumber) > Number(firstNumber) &&
//   Number(thirdNumber) > Number(secondNumber)
// ) {
//   console.log(Number(thirdNumber));
// } else {
//   console.log("there is equal numbers try again");
// }

/********************************************************************** */
// 6- Write a program that allows the user to insert integer number then
//  check If a number is oven or odd

// var yourNumber = Number(window.prompt("please enter your number?"));
// if (yourNumber % 2 == 0) {
//   console.log("even");
// } else if (yourNumber % 2 == 1) {
//   console.log("odd");
// } else {
//   console.log("try again");
// }
/************************************************* */

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// var userCharacter = window.prompt("enter your character?");

// switch (userCharacter) {
//   case "a":
//     console.log("vowel");
//     break;
//   case "e":
//     console.log("vowel");
//     break;
//   case "i":
//     console.log("vowel");
//     break;
//   case "o":
//     console.log("vowel");
//     break;
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("constant");
// }

/***************************************************************** */
// 9- Write a program that allows user to insert integer then print all numbers between 1 to
// that’s number

// var userNumber = Number(window.prompt("enter your Number?"));
// if (userNumber < 0) {
//   for (; userNumber <= 0; userNumber++) {
//     console.log(userNumber);
//   }
// } else {
//   for (; userNumber >= 0; userNumber--) {
//     console.log(userNumber);
//   }
// }

/*************************************************************/
// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var userNumber = Number(window.prompt("please enter your number?"));
// for (i = 1; i <= 12; i++) {
//   console.log(userNumber * i);
// }
/************************************************** */
// 12-  Write a program that allows to user to insert number then print all even numbers
// between 1 to this number

// var userNumber = Number(window.prompt("please enter your number?"));

// for (i = 1; i <= userNumber; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
/************************************************************* */
// 13- Write a program that take two integers then print the power
// var userNumber = Number(window.prompt("please enter your number?"));
// var numberPower = Number(window.prompt("please enter the power?"));
// var result = 1;
// for (i = 0; i < numberPower; i++) {
//   result = result * userNumber;
// }
// console.log(result);
/************************************************************************* */

// 14- Write a program to enter marks of five subjects and calculate total, average and
// percentage.
// var firstSubject = Number(window.prompt("enter your first subject mark"));
// var secondSubject = Number(window.prompt("enter your second subject mark"));
// var thirdSubject = Number(window.prompt("enter your third subject mark"));
// var fourthSubject = Number(window.prompt("enter your fourth subject mark"));
// var fifthSubject = Number(window.prompt("enter your fifth subject mark"));

// var marksTotal =
//   firstSubject + secondSubject + thirdSubject + fourthSubject + fifthSubject;
// var avgMark = marksTotal / 5;
// var percentage = (marksTotal / 500) * 100;
// console.log(`total marks is ${marksTotal}`);

// console.log(`average Mark is ${avgMark}`);
// console.log(`percentage: ${percentage} %`);

/*********************************************************************** */
// 15-Write a program to input month number and print number of days in that
// month.

// var monthNumber = Number(window.prompt("enter the month number"));

// switch (monthNumber) {
//   case 1:
//     console.log(31);
//     break;
//   case 2:
//     console.log(28);
//     break;
//   case 3:
//     console.log(31);
//     break;
//   case 4:
//     console.log(30);
//     break;
//   case 5:
//     console.log(31);
//     break;
//   case 6:
//     console.log(30);
//     break;
//   case 7:
//     console.log(31);
//     break;
//   case 8:
//     console.log(31);
//     break;
//   case 9:
//     console.log(30);
//     break;
//   case 10:
//     console.log(31);
//     break;
//   case 11:
//     console.log(30);
//     break;
//   case 12:
//     console.log(31);
//     break;
//   default:
//     console.log("not a valid month number");
// }

/***************************************************************************** */
//  16 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer  , Find percentage and grade
// var physMark = Number(window.prompt("enter your physics mark"));
// var chemistryMark = Number(window.prompt("enter your Chemistry mark"));
// var biologyMark = Number(window.prompt("enter your Biology mark"));
// var mathMarks = Number(window.prompt("enter your Mathematics mark"));
// var computerMark = Number(window.prompt("enter your Computer mark"));

// var totalMarks =
//   physMark + chemistryMark + biologyMark + mathMarks + computerMark;
// var percentage = (totalMarks / 500) * 100;
// var grade = "";

// if (percentage >= 90) {
//   grade = "Grade A";
// } else if (percentage >= 80) {
//   grade = "Grade B";
// } else if (percentage >= 70) {
//   grade = "Grade C";
// } else if (percentage >= 60) {
//   grade = "Grade D";
// } else if (percentage >= 50) {
//   grade = "Grade E";
// } else {
//   grade = "Grade F";
// }

// console.log(`the percentage:${percentage} % and the Grade: ${grade}`);
/******************************************************************************** */
// 17- Write a program to print total number of days in month

// switch (months) {
//   case "January":
//     console.log(31);
//     break;
//   case "February":
//     console.log(28);
//     break;
//   case "March":
//     console.log(31);
//     break;
//   case "April":
//     console.log(30);
//     break;
//   case "May":
//     console.log(31);
//     break;
//   case "June":
//     console.log(30);
//     break;
//   case "July":
//     console.log(31);
//     break;
//   case "August":
//     console.log(31);
//     break;
//   case "September":
//     console.log(30);
//     break;
//   case "October":
//     console.log(31);
//     break;
//   case "November":
//     console.log(30);
//     break;
//   case "December":
//     console.log(31);
//     break;
//   default:
//     console.log("not a valid month");
// }
/******************************************************************************* */
// 18- Write a program to check whether an alphabet is vowel or consonant
// switch (alphabet) {
//   case "a":
//     console.log("vowel");
//     break;
//   case "e":
//     console.log("vowel");
//     break;
//   case "i":
//     console.log("vowel");
//     break;
//   case "o":
//     console.log("vowel");
//     break;
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("constant");
// }
/********************************************************************** */
// 19- Write a program to find maximum between two numbers

// var firstNumber = Number(window.prompt("please enter the first number"));
// var secondNumber = Number(window.prompt("please enter the second number"));

// switch (firstNumber >= secondNumber) {
//   case true:
//     console.log(firstNumber);
//     break;
//   case false:
//     console.log(secondNumber);
//     break;
//   default:
//     console.log("enter a valid number");
// }

/******************************************************************** */
// 20-Write a program to check whether a number is even or odd
// var userNumber = Number(window.prompt("please enter a number"));

// switch (userNumber % 2) {
//   case 0:
//     console.log("even");
//     break;
//   case 1:
//     console.log("odd");
//     break;
//   default:
//     console.log("not a Number");
// }
/************************************************************ */
// 21-Write a program to check whether a number is positive or negative or zero
// var userNumber = Number(window.prompt("please enter a number"));
// switch (userNumber > 0) {
//   case true:
//     console.log("Positive");
//     break;
//   case false:
//     switch (userNumber < 0) {
//       case true:
//         console.log("Negative");
//         break;
//       case false:
//         switch (userNumber == 0) {
//           case true:
//             console.log("number is 0");
//             break;
//           default:
//             console.log("not a number");
//         }
//     }
// }
/************************************************************************** */

// 22-Write a program to create Simple Calculator
// var firstNumber = Number(window.prompt("first Number"));
// var operator = window.prompt("enter mathematical operator");
// var secondNumber = Number(window.prompt("enter second number"));

// var result = 0;

// switch (operator) {
//   case "+":
//     result = firstNumber + secondNumber;
//     console.log(result);
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     console.log(result);
//     break;
//   case "/":
//     result = firstNumber / secondNumber;
//     console.log(result);
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     console.log(result);
//     break;
//   default:
//     console.log("Not supported Please try again ");
// }

function calcSum(num1, num2) {
  return num1 + num2;
}
function calcAvg(sum, countOfNumbers) {
  var avg = sum / countOfNumbers;
  return avg;
}

var numberAvg = calcAvg(calcSum(20, 5), calcSum.length);
console.log(numberAvg);
