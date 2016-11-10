function Warrior(health, strength) {
  this.health = health;
  this.strength = strength;
}

Warrior.prototype.doAttack = function (rival) {
  rival.health -= Math.round(Math.random() * 2 * this.strength);
};


function Viking(health, strength, name) {
  Warrior.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Warrior.prototype);


module.exports = Warrior;
module.exports = Viking;
