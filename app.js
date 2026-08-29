const isEven = require('./modules/isEven');
const log = require('./modules/logger');

log("App started");

for (let i = 1; i <= 5; i++) {
  console.log(i, isEven(i) ? "Even" : "Odd");
}