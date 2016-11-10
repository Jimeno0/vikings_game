function Viking (name,health,strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.doAttack = function (rival) {
  rival.health -= this.strength;
};

var ragnar = new Viking('Ragnar', 100, 10);
var floki = new Viking('Flokki', 80, 8);

console.log(floki.health);
ragnar.doAttack(floki);
console.log(floki.health);
