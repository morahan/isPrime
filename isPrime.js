// document.getElementById('testPrimeButton').addEventListener('click', (e) => e.preventDefault())
let isPrime = function(input){
  let num;
  let result;

  if (typeof input === "string"){
    input.includes(',') ? num = parseInt(input.split(',').join('')) : num = parseInt(input);
  } else if (typeof input === "number") {
    num = input;
  }

  if (num === 2){
    result = true;
    // break;
  } else if (num < 2){
    result = false;
    // break;
  }

  let div = 2;
  let count = 2;
  const countTarget = Math.ceil(num/2);

  while (div <= Math.ceil(num/2)){
    if (count === countTarget) {
      result = true;
    }
    if (num % div === 0) {
      result = false;
    } else {
      div++;
      count++;
      // break;
    }
  }
  if (result) {
    return (document.getElementById("answer").innerHTML = `${num} is a Prime Number!`); 
  } else {
    return (document.getElementById("answer").innerHTML = `${num} is not Prime`);
  }
}


// 1,000,000th prime = 15,485,863