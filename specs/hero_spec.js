var hero = require( '../hero');
var food = require( '../food');
var rat = require( '../rat');
var enemy = require( '../enemy');
var assert = require( 'chai' ).assert;

describe( 'gameTests', function() {

  beforeEach(function() {
     hero1 = new hero( 'Aiden', 100, 'Ham', true, false);
     hero2 = new hero( 'Steven', 100, 'Chicken', false, false);
     food1 = new food( 'Ham', 30);
     food2 = new food( 'Chicken', 30);
     enemy1 = new enemy( 'Harry The Bastard', 200, 50, false, true);
  })

  it( 'should be able to talk', function() {
    console.log(hero1.talk())
    assert.equal('Hello! My name is Aiden', hero1.talk());
  })

  it( 'should increase health when eating food', function() {
    hero1.eat(food2);
    assert.equal(130, hero1.health)
  })

  it( 'should increase health by 1.5 times when eating fav food', function() {
    hero2.eat(food2)
    assert.equal(145, hero2.health)
  })
  it( 'should be able to inflict damage to the enemy', function() {
    hero1.inflictDamage(enemy1);
    assert.equal(170, enemy1.health)
  })

});