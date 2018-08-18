const { execFile } = require('child_process');
const proc = require('./proc');

const p = {};

process.title = 'childprocess';

for(let i = 3; i >= 1; i--){
  execFile('node', ['proc', i]);
}

setTimeout(()=>'', 300000);