"use strict";

let Type = require('./type');
let healthGen = require('./healthGen');
let damageGen = require('./damageGen');
const Model = {};

Model.Seeker = function() {
  this.model = 'seeker';
  this.health = healthGen(80, 100);
  this.damage = damageGen(7, 10);
};
Model.Seeker.prototype = new Type.Instinct();

Model.Evader = function() {
  this.model = 'evader';
  this.health = healthGen(70, 90);
  this.damage = damageGen(8, 11);
};
Model.Evader.prototype = new Type.Instinct();

Model.Enforcer = function() {
  this.model = 'enforcer';
  this.health = healthGen(85, 105);
  this.damage = damageGen(1, 14);
};
Model.Enforcer.prototype = new Type.Valor();

Model.Eliminator = function() {
  this.model = 'eliminator';
  this.health = healthGen(90, 110);
  this.damage = damageGen(0, 15);
};
Model.Eliminator.prototype = new Type.Valor();

Model.Strategizer = function() {
  this.model = 'strategizer';
  this.health = healthGen(75, 95);
  this.damage = damageGen(7, 12);
};
Model.Strategizer.prototype = new Type.Mystic();

Model.Flanker = function() {
  this.model = 'flanker';
  this.health = healthGen(65, 85);
  this.damage = damageGen(8, 13);
};
Model.Flanker.prototype = new Type.Mystic();

var test = new Model.Seeker();
console.log("test", test);

module.exports = Model;