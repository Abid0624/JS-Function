/**
 *for a given string tell me whether it has even number numbers of characters or not 
 * 
 * String type
 **/ 

// function evenSizedString(str){
//   const size = str.length;
//   console.log(str,size);
//   if(size % 2 === 0){
//     console.log('even size')
//     return true;
//   }
//   else{
//     console.log('odd number');
//     return false;
//   }
//  }
// console.log(evenSizedString('Dhaka'));
// console.log(evenSizedString('faka'));


// boolean type

function doubleOrTriple(number,doDouble){
  if(doDouble === true){
    const result = number * 2;
    return result;
  }
  else{
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(4,true));
console.log(doubleOrTriple(3,false));

// Array type

function numOfElements(numbers){
  const len = numbers.length;
  return len;
}
numOfElements([12,34,67,45,223,112,4,5])

// object type

function getAge(person){
  const age = person.age;
  return age;
}