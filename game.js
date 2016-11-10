var Viking = require('./vikings.js');
var Pit = require('./pit.js');

var ragnar = new Viking('Ragnar', 100, 10);
var floki = new Viking('Flokki', 80, 8);

// console.log(floki.health);
// ragnar.doAttack(floki);
// console.log(floki.health);

var pit = new Pit(ragnar,floki,10);

pit.startgame();
