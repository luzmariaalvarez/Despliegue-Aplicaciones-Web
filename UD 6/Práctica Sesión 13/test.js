const suma = require('../index');

if (suma(2, 2) !== 4) {
  console.error("Test fallido");
  process.exit(1);
}

console.log("Test superado");
