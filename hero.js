var Hero = function( name, health, favFood ) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
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
  }
}

module.exports = Hero;