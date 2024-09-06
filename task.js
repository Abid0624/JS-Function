// Task - 1

function multiply(num1,num2,num3,num4){
  const total = num1 * num2 * num3 * num4;
  return total;
}
const result = multiply(4,5,6,7);
console.log(result);

// Task - 2

function oddEven(number){
  if(number % 2 === 0){
    const result = number / 2;
    return result;  
  }
  else{
    const result = number * 2;
    return result;
  }
}

const odd_evens = oddEven(5);
console.log(odd_evens)

const even_odd = oddEven(6);
console.log(even_odd)

// Task - 3

function make_avg(numbers){
  let sum = 0;
  for (const number of numbers){
    sum = sum + number;
  }
  const avg = sum / numbers.length;
  return avg;
}

const numbs = [24, 35, 67, 87, 67];
const avg = make_avg(numbs);
console.log(avg);

// Task - 4

function count_zero(str){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === '0'){
      count++;
    }
  }
  return count;
}

const str = '01011100001';
const totalZero = count_zero(str);
console.log(totalZero)

// Task - 5

function odd_even(number){
  if(number % 2 === 0){
    const result = 'Even';
    return result;
  }
  else{
    const result = 'Odd'
    return result;
  }
}

const even_odd = odd_even(6);
console.log(even_odd)