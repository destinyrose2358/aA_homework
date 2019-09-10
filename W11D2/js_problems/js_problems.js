function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
This one outputs in block twice, I can only assume this is because
x gets reassigned within a block, and this carries over.
*/


function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
Ths one outputs "in block" followed by "out of block", this is because a constant is not
allowed to be overwritten but can be different in a seperate block
*/

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
This function raises errors, it seems because there is a constant x already assigned
and so the variable x cannot be created.
*/

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
This one works just fine and outputs in block followed by out of block
*/

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

/*
This one raises an error since it tried to declare x twice in the same block
*/

function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`);
}

function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) >= 0;
}

function fizzBuzz(array) {
  let fizzBuzzArray = [];
  array.forEach(element => {
    if ((element % 3 === 0 || element % 5 === 0) && !(element % 3 === 0 && element % 5 === 0)) {
      fizzBuzzArray.push(element);
    }
  });
  return fizzBuzzArray;
}

function isPrime(number) {
  for ( var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let primes = 0;
  for ( var i = 2; primes < n; i++ ) {
    if (isPrime(i)) {
      sum += i;
      primes ++;
    }
  }
  return sum;
}