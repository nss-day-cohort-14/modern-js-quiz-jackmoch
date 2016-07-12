"use strict";

const BuildRobot = {};
const Model = require('./model');

let playerArray = [];

BuildRobot.Player1Robot = (model, playerName) => {
  let player1 = new Model[model]();
  player1.name = playerName;
  playerArray.push(player1);
};

BuildRobot.Player2Robot = (model, playerName) => {
  let player2 = new Model[model]();
  player2.name = playerName;
  playerArray.push(player2);
};

module.exports = {
  BuildRobot, playerArray
};