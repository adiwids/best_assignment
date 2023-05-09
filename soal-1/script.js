#!/usr/bin/env node

function cetakTelurAtauAyam(x, y) {
  var x_output = x;
  for(var i = 0; i < (y - 1); i++) {
    x_output = x + 2 * i;
    console.log("Iterasi %d", i + 1);
    console.log("   Output x = %d", x_output);
  }

  const text = x_output % 2 == 0 ? "AYAM" : "TELUR";

  console.log("Teks = %s", text);
}

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);
console.log("x=%d, y=%d", x, y);
cetakTelurAtauAyam(x, y);
