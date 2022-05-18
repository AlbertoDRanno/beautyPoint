const bcryptjs = require("bcryptjs");

let hash = bcryptjs.hashSync("abc123", 10); // encripta el texto con el agregado de sal (+ encriptado), siempre "10"
console.log(hash);
console.log(bcryptjs.compareSync("abc123", hash));
// compara encriptado con texto plano (el texto "hash" debe haber sido encriptado previamente)
