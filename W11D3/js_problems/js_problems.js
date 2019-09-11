
let titleize = function (names, callback) {
  let titles = names.map((name) => { return "Mx. " + name + " Jingleheimer Schmidt"});
  callback(titles);
};

let printCallback = function (titles) {
  titles.forEach(title => {
    console.log(title);
  });
};

let Elephant = function (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  console.log(this.tricks[Math.floor(Math.random() * this.tricks.length)]);
};

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is commiting crimes`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

herd.forEach(Elephant.paradeHelper);

let dinerBreakfast = function () {
  let order = ["scrambled eggs", "bacon"];

  return function () {
    order.push(...arguments);
    console.log("I'd like " + order.join(" and ") + " please.");
  };
};