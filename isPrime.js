// document.getElementById('testPrimeNumber').addEventListener('click', (e) => e.preventDefault())
function isPrime(num){
  num = parseInt(document.getElementById('potentialPrime').value);
  if (num === 2){
    alert(`${num} is a Prime Number!`);
  } else if (num < 2){
    alert(`${num} is not Prime`);
  }
  let div = 2;
  let count = 2;
  while (div < Math.ceil(num/2)){
    if(num % div !== 0){
        div ++;
        count ++;
    } else {
      alert(`${num} is not Prime`)
    }
  }
  let countTarget = Math.ceil(num/2);
  if (count === countTarget) {
    alert(`${num} is a Prime Number!`);
  }
}

// let testPrime = document.getElementById('potentialPrime').value;
// isPrime(testPrime);



// baily version
{/* <script>
  document.getElementById('testPrimeNumber').addEventListener('click', (e) => e.preventDefault())
    function isPrime() {
    let num = parseInt(document.getElementById('potentialPrime').value);
      if (num === 2) {
    alert(`${num} is a Prime Number!`);
      } else if (num < 2) {
    alert(`${num} is not Prime`);
}
// did not debug below code
let div = 2;
let count = 2;
      while (div < Math.ceil(num / 2)) {
        if (num % div !== 0) {
    div++;
  count++;
        } else {
          return `${num} is not Prime`
}
}
let countTarget = Math.ceil(num / 2);
      if (count === countTarget) {
        return `${num} is a Prime Number!`;
}
}
  </script> */}