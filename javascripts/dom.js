"use strict";

var $ = require('jquery');

const Dom = {};
const BuildRobot = require('./buildRobot');
const Battle = require('./battle');

Dom.OnLoad = () => {
  $('.player1__robot').click(function() {
    Dom.player1Build($(this));
  });
  $('.player2__robot').click(function() {
    Dom.player2Build($(this));
  });
  $('.attackBtn').on('click', function() {
    Battle();
  });
};

Dom.player1Build = (input) => {
  let model = input.text();
  let playerName = $('#player1__name').val();
  BuildRobot.BuildRobot.Player1Robot(model, playerName);
};

Dom.player2Build = (input) => {
  let model = input.text();
  let playerName = $('#player2__name').val();
  BuildRobot.BuildRobot.Player2Robot(model, playerName);
};

module.exports = Dom;