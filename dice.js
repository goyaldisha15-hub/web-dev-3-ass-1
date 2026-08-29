const crypto = require('crypto');

const dice = crypto.randomInt(1, 7);
console.log("Dice Rolled:", dice);