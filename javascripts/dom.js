"use strict";

var $ = require('jquery');
const dom = {};

dom.DisableBtns = () => {
  $('.robot__type').prop('disabled', true);
  $('.robot__model').hide();
};

dom.DisplayInstincts = () => {
  $('.robot__type__instinct').mouseenter(function() {
    $('.instinct__model').show();
  });
  $('.robot__type__instinct').mouseout(function() {
    $('.instinct__model').hide();
  })
};

module.exports = dom;