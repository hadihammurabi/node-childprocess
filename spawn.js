const { execFile } = require('child_process');
const proc = require('./proc');

const p = {};

for(let i = 3; i >= 1; i--){
  execFile('node', ['proc', i]);
}

