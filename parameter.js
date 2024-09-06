function vatKhao (){
  console.log('hand wash kore asho');
  console.log('boso');
  console.log('plate e khabar dabar nao');
  console.log('gopat gopat kore khao')
}
// vatKhao();

// 3 ----> 3 * 3 =9
// 4 ----> 4 * 4 = 16
// parameter is one kind of variable used in function name.it's only works under function. 

function square (number){
  console.log('value of the number parameter', number) ;
  const borgo = number * number;
  console.log('square of the given number is: ', borgo);
}
square(4);
square(64);
console.log('---------------');
square(20);

function add(num1,num2){
  const sum = num1 + num2;
  console.log(sum);
}
add(45,29);
add(59,999);

function addAll(a,b,c,d,e){
  const total = a + b + c + d + e ;
  console.log(a,b,c,d,e);
  console.log(total);
}

addAll(1,2,45,56);

// When we call a function we have to give all the parameter value otherwise it gives NaN and undefined;