"use strict";

function getHealth(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = getHealth;