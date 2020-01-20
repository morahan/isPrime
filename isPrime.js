function isPrime(num){
  if (num === 2){
    return `${num} is a Prime Number!`;
  } else if (num < 2){
    return `${num} is not Prime`
  }
  let div = 2;
  let count = 2;
  while (div < Math.ceil(num/2)){
    if(num % div !== 0){
        div ++;
        count ++;
    } else {
      return `${num} is not Prime`
    }
  }
  let countTarget = Math.ceil(num/2);
  if (count === countTarget) {
    return  `${num} is a Prime Number!`;
  }
}


let button = document.getElementById('testPrimeNumber');
let value = button.form.valueId.value;
button.onclick = function(){
  return isPrime(value);
}

// let testPrime = document.getElementById('potentialPrime');
// isPrime(testPrime);


// let num = 7;
// let countTarget = Math.ceil(num/2);
// console.log(countTarget)
