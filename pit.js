function Pit (a,b,num){

  var combatant_one = a;
  var combatant_two = b;
  var turns = num;

  function declareWinner(combatant_one, combatant_two){
    return combatant_one.health > combatant_two.health ? combatant_one.name + ' wins!' : combatant_two.name + ' wins!' ;
  }

  this.startgame = function(){
      while (combatant_one.health > 20 && combatant_two.health > 20 && turns !== 0) {
        combatant_one.doAttack(combatant_two);
        combatant_two.doAttack(combatant_one);
        console.log('round: '+ turns);
        console.log(combatant_one.name +'is '+ combatant_one.health + ' attacks ' + combatant_two.name + ' is ' + combatant_two.health);
        turns -=1;
      }
      var winner = declareWinner(combatant_one, combatant_two);
      console.log(winner);
  };

  this.deadCombat = function functionName() {
    while (combatant_one.health > 0 && combatant_two.health > 0 ) {
      combatant_one.doAttack(combatant_two);
      combatant_two.doAttack(combatant_one);
    }
    var winner = declareWinner(combatant_one, combatant_two);
    console.log(winner);
  };

}

module.exports = Pit;
