"use strict";

const Player = require('../player');

describe('specs for Player', function() {
  let testPlayer = new Player();
  it('should have a name property', function() {
    expect(testPlayer.name).toBeDefined();
  });
  it('should have a health property', function() {
    expect(testPlayer.health).toBeDefined();
  });
  it('should have a damage property', function() {
    expect(testPlayer.damage).toBeDefined();
  });
  it('should have a type property', function() {
    expect(testPlayer.type).toBeDefined();
  });
  it('should have a model property', function() {
    expect(testPlayer.model).toBeDefined();
  });
});