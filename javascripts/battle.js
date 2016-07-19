"use strict";

const BuildRobot = require('./buildRobot');

function Battle() {
  let player1 = BuildRobot.playerArray[0];
  let player2 = BuildRobot.playerArray[1];
  FirstAttack(player1, player2);
}

function FirstAttack(player1, player2) {
  if (player1.health > 0) {
    player2.health = player2.health - player1.damage;
    OutputAttack(player1, player2, player1.damage);
    SecondAttack(player2, player1);
  } else {
    OutputWinner(player2, player1);
  }
}

function SecondAttack(player2, player1) {
  if (player2.health > 0) {
    player1.health = player1.health - player2.damage;
    OutputAttack(player2, player1, player2.damage);
    FirstAttack(player1, player2);
  } else {
    OutputWinner(player1, player2);
  }
}

function OutputAttack(attacker, defender, damage) {
  let outputString = `<p class="center__battle">${attacker.name}'s ${attacker.model} struck ${defender.name}'s ${defender.model} for ${damage} damage.</p>`;
  $('#output').append(outputString);
}

function OutputWinner(winner, loser) {
  let outputString = `<h1 class="winner centered__text">${winner.name}'s ${winner.model} destroyed ${loser.name}'s ${loser.model}</h1>`;
  $('#output').append(outputString);
  $('html, body').scrollTop($(document).height());
}

module.exports = Battle;