"use strict";

var $ = require('jquery');
const dom = require('./dom');

$(document).ready(() => {
  $('#player1__name').keyup(function() {
    $('.robot__type').prop('disabled', this.value === "" ? true : false);
  });
});

dom.DisableBtns();
dom.DisplayInstincts();