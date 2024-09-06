function doubleIt(number){
  const doubled = number * 2;
  console.log(number,doubled);
}

console.log('I will call the function');
doubleIt(24);
console.log('----------------');
doubleIt(56);
console.log('----------------------');
doubleIt(873);

const number = 55;
doubleIt(number);
const money = 112;
doubleIt(money);


function differnce (num1,num2){
  const num = num1 - num2 ;
  console.log(num1,num2, 'difference is', num)
}

const myFatherAge = 64;
const myAge = 24;
differnce(myFatherAge,myAge);