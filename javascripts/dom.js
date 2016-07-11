"use strict";

var $ = require('jquery');
const dom = {};
let test = false;

dom.OnLoad = () => {
  $('.robot__type').hide();
  $('.robot__model').hide();
  $('.player1__confirm').hide();
  $('.player1__equip').hide();
};

dom.InputName = () => {
  $('#player1__name').keyup(() => {
    $('.robot__type').toggle('display');
    $('#player1__name').off();
    dom.NameEmpty();
  });
};

dom.NameEmpty = () => {
  $('#player1__name').keyup(() => {
    if ($('#player1__name').val() === '') {
      $('.robot__type').toggle('display');
      $('#player1__name').off();
      dom.InputName();
    }
  });
};

dom.DisplayInstincts = () => {
  $('.robot__type__instinct').on("mouseenter mouseleave", function() {
    $('.instinct__model').toggle('display');
  });
};

dom.DisplayValor = () => {
  $('.robot__type__valor').on("mouseenter mouseleave", function() {
    $('.valor__model').toggle('display');
  });
};

dom.DisplayMystic = () => {
  $('.robot__type__mystic').on("mouseenter mouseleave", function() {
    $('.mystic__model').toggle('display');
  });
};

dom.ClickType = function() {
  $('.robot__type').on('click', function() {
    dom.DisableBtns($(this));
  });
};

dom.ClickModel = function() {
  $('.robot__model').click(() => {
    $('.player1__screen').hide();
    $('.player1__confirm').show();
  });
};

dom.DisableBtns = function(test) {
  let hashId = '#' + test[0].id;
  $('.robot__type').not(hashId).hide();
  $('.robot__type').off();
  $('.robot__type').on('click', function() {
    dom.EnableBtns(hashId);
  });
};

dom.EnableBtns = (hashId) => {
  $('.robot__type').not(hashId).toggle('display');
  dom.DisplayInstincts();
  dom.DisplayValor();
  dom.DisplayMystic();
  dom.ClickType();
};

dom.ClickConfirm = () => {
  $('#confirm__continue').click(() => {
    $('.player1__confirm').hide();
    $('.player1__equip').show();
  });
};

module.exports = dom;