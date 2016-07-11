"use strict";

const Model = require('../model');

describe('specs for Model.Seeker', function() {
  let testSeeker = new Model.Seeker();
  it('should have a model property', function() {
    expect(testSeeker.model).toBeDefined();
  });
});