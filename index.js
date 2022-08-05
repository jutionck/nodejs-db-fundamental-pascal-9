const {run} = require("./src/controller/server");

run()

const name = 'Jack';
const query = `HALO %${name}%`;
console.log(query);
