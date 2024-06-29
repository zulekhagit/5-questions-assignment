#! /usr/bin/env node
import inquirer from "inquirer";
Question:1
//Write a jawascript function that accepts a string as a  parameter and counts the 
//the number of vowels within the string.

function countVowels(str:string){
    let vowelCount=0;
    let lowerCaseStr=str.toLowerCase();
    for(let i=0;i<lowerCaseStr.length;i++){
        if(lowerCaseStr[i] === `a` || lowerCaseStr[i] === `e` || lowerCaseStr[i] === `i` || lowerCaseStr[i] === `o` || lowerCaseStr[i] === `u`){
            vowelCount++;
        }
    }
    return vowelCount;

}
let word= countVowels("hello Aisha")
console.log(`number of vowel in a ${word}` )

Question:2
// Write a jawascript function that accepts a number as a parameter and check whether 
 // it is prime or not using  recursion.


 function checkPrime(number:number,divisor:number=2){
    if(number<=1){
        return `the number ${number} is not a prime number`
    }
    if(divisor * divisor >number){
        return `the number ${number} is  a prime number`
    }
    if(number % divisor === 0){
        return `the number ${number} is not a prime number`
    }
    return checkPrime(number,divisor+1)

 }
    console.log(checkPrime(19))
    console.log(checkPrime(29))
    console.log(checkPrime(7))
    console.log(checkPrime(10))
    console.log(checkPrime(27))


Question:3
//Write a jawascript function to find the first not repeated chracter

function notRepeated(str:string){
    let array=[];
    for (let val of str){
       if(str.indexOf(val) === str.lastIndexOf(val)){
          array.push(val)
       }
    }
    return array;
 }
 console.log(notRepeated("abcdefcde"))


Question:4
//Write a function that returns the square of a number,
function squareOfNumber(num:number):number{
    return num * num 

};
console.log(squareOfNumber(6));


Question:5
// Function displayMessage () prints "Hello World"
// string using console.log() function.

function displayMessage(str:string){
    return str
}
console.log(displayMessage("Hello World"))

// 2nd method by using arrow function
let printMessage=()=>{
    console.log("Hello World!")
}
printMessage()



 
