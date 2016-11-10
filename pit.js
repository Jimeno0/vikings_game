function Pit (a,b,num){

  var viking_one = a;
  var viking_two = b;
  var turns = num;

  function declareWinner(viking_one, viking_two){
    return viking_one.health > viking_two.health ? viking_one.name + ' wins!' : viking_two.name + ' wins!' ;
  }

  this.startgame = function(){
      while (viking_one.health > 20 && viking_two.health > 20 && turns !== 0) {
        viking_one.doAttack(viking_two);
        viking_two.doAttack(viking_one);
        console.log('round: '+ turns);
        console.log(viking_one.name +'is '+ viking_one.health + ' attacks ' + viking_two.name + ' is ' + viking_two.health);
        turns -=1;
      }
      var winner = declareWinner(viking_one, viking_two);
      console.log(winner);
  };

}

module.exports = Pit;
