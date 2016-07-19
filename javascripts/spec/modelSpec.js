"use strict";

const Model = require('../model');

describe('specs for Model.Seeker', function() {
  let testSeeker = new Model.Seeker();
  it('should have a model property', function() {
    expect(testSeeker.model).toBeDefined();
  });
  it('should have a health property', function() {
    expect(testSeeker.health).toBeDefined();
  });
  it('should have a damage property', function() {
    expect(testSeeker.damage).toBeDefined();
  });
});