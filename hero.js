var Hero = function( name, health, favFood, attack, attacked ) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.attack = attack;
  this.attacked = attacked;
}

Hero.prototype = {
  talk: function() {
    var talk =  ("Hello! My name is " + this.name);
    return talk
  },
  eat: function(food) {
    if(food.name === this.favFood){
      this.health += (food.healthUp * 1.5)
    }
    else if(food.poisoned === true){
      this.health -= (food.healthUp / 2)
    }
    else
    {
    this.health += food.healthUp
    }
  },
  inflictDamage: function(enemy) {
    if(this.attack === true && enemy.attacked === true){
      enemy.health -= 30 };
      return enemy.health
    }
}

module.exports = Hero;