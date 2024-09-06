/**
 * Create a function that will return only the even numbers
 * return the sum of even numbers
 * 
 **/ 

function evenNumbersOnly(numbers){
  const evenNum = [];
  for (const number of numbers){
    if(number % 2 === 0){
      console.log(number);
      evenNum.push(number);
    } 
  }
  return evenNum;
}

const numbs = [5, 6 , 8, 91, 20];
// const evens = evenNumbersOnly(numbs);
// console.log('Even numbers are', evens)

function sumOfEvenNumbers(numbers){
  let total = 0;
  for (const number of numbers){
    if(number % 2 === 0){
      console.log(number)
      total = total + number;
    }
  }
  return total;
}

const sum = sumOfEvenNumbers(numbs);
console.log('Sum of even numbers are ',sum);