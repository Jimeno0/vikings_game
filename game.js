var Warrior = require('./warriors.js');
var Viking = require('./warriors.js');
// var Viking = require('./vikings.js');
var Pit = require('./pit.js');

var ragnar = new Viking(100, 10, 'Ragnar');
var floki = new Viking(80, 8, 'Flokki');

console.log(ragnar);
console.log(floki);

var pit = new Pit(ragnar,floki,10);

pit.startgame();
