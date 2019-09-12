const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let teaAndBiscuits = function () {
  reader.question("Would you like some tea?", (firstAnswer) => {
    console.log(`${firstAnswer}`);
    reader.question("Would you like biscuits?", (secondAnswer) => {
      console.log(`So you ${firstAnswer} want tea and you ${secondAnswer} want coffee.`);
      reader.close();
    })
  })
};

function faultyTeaAndBiscuits() {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);
  });

  reader.question('Would you like some biscuits?', (res) => {
    second = res;
    console.log(`You replied ${res}.`);
  });

  const firstRes = (first === 'yes') ? 'do' : 'don\'t';
  const secondRes = (second === 'yes') ? 'do' : 'don\'t';
  console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
  reader.close();
}

function fixedTeaAndBiscuits() {

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', (res) => {
    second = res;
    console.log(`You replied ${res}.`);
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();
  });
  });
}

fixedTeaAndBiscuits();
//teaAndBiscuits();