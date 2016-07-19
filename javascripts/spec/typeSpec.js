"use strict";

const Type = require('../type');

describe('specs for type.Instinct', function() {
  let testInstinct = new Type.Instinct();
  it('should have a type property', function() {
    expect(testInstinct.type).toBeDefined();
  });
});