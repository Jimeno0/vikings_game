function Viking (name,health,strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype.doAttack = function (rival) {
  rival.health -= this.strength;
};

module.exports = Viking;
