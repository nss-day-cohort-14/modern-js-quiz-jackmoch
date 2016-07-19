"use strict";

let Player = require('./player');
const Type = {};

Type.Main = function() {
  this.type = null;
};
Type.Main.prototype = new Player();

Type.Instinct = function() {
  this.type = "Instinct";
};
Type.Instinct.prototype = new Type.Main();

Type.Valor = function() {
  this.type = "Valor";
};
Type.Valor.prototype = new Type.Main();

Type.Mystic = function() {
  this.type = "Mystic";
};
Type.Mystic.prototype = new Type.Main();

module.exports = Type;