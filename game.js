var Warrior = require('./warriors.js');
var Viking = require('./warriors.js');
var Pit = require('./pit.js');

var ragnar = new Viking(100, 10, 'Ragnar');
var floki = new Viking(80, 8, 'Flokki');

//two vikings combat
// var pit = new Pit(ragnar,floki,10);
// pit.startgame();

var vikings = [ragnar,floki];
var saxons = [];
var number_of_saxons = 4;
for (var i = 0; i < number_of_saxons ; i++) {
  var random_health = Math.round(Math.random()*20);
  var random_strenght = Math.round(Math.random()*4);
  saxons.push(new Warrior(random_health,random_strenght));
}
console.log('Assault beggins!');


while (saxons.length > 0) {
  for (var i = 0; i < vikings.length; i++) {
    if (saxons[i] && vikings[i]) {
      console.log('new combat '+ vikings[i].name +' vs saxon heal ' +saxons[i].health);
      var pit = new Pit(vikings[i],saxons[i]);
      pit.deadCombat();
      console.log(vikings[i].name + ' the viking with health: '+ vikings[i].health +' defeat a saxon with health: ' + saxons[i].health);
      if (saxons[i].health <= 0) { saxons.splice(i,1);}
    }
  }
}
console.log('No more saxons, massacre ends!');
