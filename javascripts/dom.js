"use strict";

var $ = require('jquery');
const Dom = {};
let test = false;

Dom.OnLoad = () => {
  $('.robot__type').hide();
  $('.robot__model').hide();
  $('.player1__confirm').hide();
  $('.player1__equip').hide();
};

Dom.InputName = () => {
  $('#player1__name').keyup(() => {
    $('.robot__type').toggle('display');
    $('#player1__name').off();
    Dom.NameEmpty();
  });
};

Dom.NameEmpty = () => {
  $('#player1__name').keyup(() => {
    if ($('#player1__name').val() === '') {
      $('.robot__type').toggle('display');
      $('#player1__name').off();
      Dom.InputName();
    }
  });
};

Dom.DisplayInstincts = () => {
  $('.robot__type__instinct').on("mouseenter mouseleave", function() {
    $('.instinct__model').toggle('display');
  });
};

Dom.DisplayValor = () => {
  $('.robot__type__valor').on("mouseenter mouseleave", function() {
    $('.valor__model').toggle('display');
  });
};

Dom.DisplayMystic = () => {
  $('.robot__type__mystic').on("mouseenter mouseleave", function() {
    $('.mystic__model').toggle('display');
  });
};

Dom.ClickType = function() {
  $('.robot__type').on('click', function() {
    Dom.DisableBtns($(this));
  });
};

Dom.ClickModel = function() {
  $('.robot__model').click(() => {
    $('.player1__screen').hide();
    $('.player1__confirm').show();
  });
};

Dom.DisableBtns = function(test) {
  let hashId = '#' + test[0].id;
  $('.robot__type').not(hashId).hide();
  $('.robot__type').off();
  $('.robot__type').on('click', function() {
    Dom.EnableBtns(hashId);
  });
};

Dom.EnableBtns = (hashId) => {
  $('.robot__type').not(hashId).toggle('display');
  Dom.DisplayInstincts();
  Dom.DisplayValor();
  Dom.DisplayMystic();
  Dom.ClickType();
};

Dom.ClickConfirm = () => {
  $('#confirm__continue').click(() => {
    $('.player1__confirm').hide();
    $('.player1__equip').show();
  });
};

module.exports = Dom;