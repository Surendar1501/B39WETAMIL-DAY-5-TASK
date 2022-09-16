//normal function
// print odd numbers in an Array

const numbers = [8, 19, 5, 6, 14, 9, 13];
var oddNumbers = [];
function oddNumber() {
  for (const num of numbers) {
    if (num % 2 === 1) {
      oddNumbers.push(num);
    }
  }
  console.log(oddNumbers);
}
oddNumber();

// convert all the string to title caps in a string array

const fruits = ["apple", "orange", "grapes", "banana"];
function upperCase() {
  const caps = fruits.map(fruit => fruit.toUpperCase());
  console.log(caps);
};
upperCase();

// sum of all numbers in n Array
let num1 = [1, 4, 6, 8, 10];
let num2 = 0;
function sum() {
  for (let i = 0; i < num1.length; i++) {
    num2 += num1[i];
  };
  console.log(num2);
}
sum();

// return all the prime numbers in an array

const arr = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15];
const prime = [];
var i = 0;
function findPrime() {
  for (var num of arr) {
    if (num === 2) {
      prime.push(num);
      i++;
    }
    else if (num > 2) {
      var flag = true;
      for (var j = 2; j <= num / 2; j++) {
        if (num % j === 0) {
          flag = false;
          break;
        }
      }
      if(flag){
        prime.push(num);
         i++; 
      }
    }
  }
  console.log(prime);
}
findPrime();

// return all the palindromes in an array
let palindromes= ['guide','did','racecar','mom','dad','rock'];
 
 
function reverse(str){
    
    let newString = "";
   for (let i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
  
}

var checkIsPalindrome = function(palindromes){
  var result=[];
  
  for(var i=0;i<palindromes.length;i++){
     if (palindromes[i]==reverse(palindromes[i])){
         result.push(palindromes[i])
     }
  }
  console.log(result);
}

checkIsPalindrome(palindromes);
// return median of two sorted arrays of same size

let array1 = [1,12,15, 26, 38];

let array2 = [2,13,17,30,45];

var n = 5;
var resArr = [];
function sortedArray(){
for(var i=0, j=0; i < n || j < n; ) {
  if(array1[i] < array2[j]) {
    resArr.push(array1[i]);
    i++;
  } else if (array1[i] > array2[j]) {
    resArr.push(array2[j]);
    j++;
  } else {
    if (i < n) {
      resArr.push(array1[i]);
    i++;
    }
    if (j < n) { 
      resArr.push(array2[j]);
      j++;
    }
  }
}

console.log((resArr[n - 1] + resArr[n]) / 2);
}
sortedArray();

// remove duplicates from an array

const bikes = ['yamaha', 'bajaj', 'yamaha', 'ktm', 'honda'];
function duplicates(){
  let uniqueBikes = bikes.filter((elements, index) => {
    return bikes.indexOf(elements) === index;
  });
  console.log(uniqueBikes);
}
duplicates();

// rotate an array by k times
const arr1 = [1, 2, 3, 4, 5];
const k = 4;

function rotateArray(arr1, k){
for(let i = 0; i < k; i++){
let element = arr1.pop();
arr1.unshift(element);
}
console.log(arr1);
}
rotateArray(arr1, k);

// arrow function
// print odd numbers in an Array
const number = [8, 19, 5, 6, 14, 9, 13];
var oddNum = [];
var oddNumber = () => {
  for (const num of number) {
    if (num % 2 === 1) {
     oddNum.push(num);
    }
  }
console.log(oddNum);
}
oddNumber();

// convert all the string to title caps in a string array

const cities = ["chennai", "mumbai", "bangalore", "pune"];
var upperCase = () => {
  const capital = cities.map(city => city.toUpperCase());
  console.log(capital);
};
upperCase();

// sum of all numbers in n Array
let number1 = [1, 6, 11, 5, 10];
let number2 = 0;
var sum = () => {
  for (let i = 0; i < number1.length; i++) {
    number2 += number1[i];
  };
  console.log(number2);
}
sum();
// return all the prime numbers in an array

const array = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15];
const primeNumber = [];
var i = 0;
var findPrimeNumber = () => {
  for (var num of array) {
    if (num === 2) {
      primeNumber.push(num);
      i++;
    }
    else if (num > 2) {
      var flag = true;
      for (var j = 2; j <= num / 2; j++) {
        if (num % j === 0) {
          flag = false;
          break;
        }
      }
      if(flag){
        primeNumber.push(num);
         i++; 
      }
    }
  }
  console.log(primeNumber);
}
findPrimeNumber();

// return all the palindromes in an array
let arrays = ['boss','did','Queen','mom','dad','rock'];
 
 
var reverse = (str) => {
     
     let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
   
}

var checkIsPalindrome = (arrays) => {
   var result=[];
   
   for(var i=0;i<arrays.length;i++){
      if (arrays[i]==reverse(arrays[i])){
          result.push(arrays[i])
      }
   }
   console.log(result);
}

 checkIsPalindrome(arrays);
