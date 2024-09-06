/***
 * objective : write a function to give me the sum of all numbers in an array.
 * Step - 1: declare a function
 * Step - 2: call check whether function is called properly
 * Step - 3: set a parameter
 * Step - 4: pass the parameter,check whether parameter is passed properly
 * Step - 5: do the function tasks (steps by step)
 ***/ 

// function sumOfNumbers(numbers){
//   let sum = 0;
//   for (const number of numbers){
//     console.log(number)
//     sum = sum + number;
//   }
//   return sum;
// }
// const numbs = [54, 46 , 48, 77];
// const total = sumOfNumbers(numbs);
// console.log('Sum of numbers is : ',total)


function arraySum(numbers){
  let sum = 0;
  for(const number of numbers){
    sum = sum + number
    console.log(sum)
  }
  return sum;
}

let total = arraySum([23, 34, 56, 77]);
let result = arraySum([54, 46 , 48, 77]);
console.log('The total is : ', total);
console.log('The total is : ', result);