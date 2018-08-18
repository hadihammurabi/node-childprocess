title = process.argv[2];
process.title = `[${title}]`;

const { execFile } = require('child_process');

const p = [];

for (let j = 1; j <= 3; j++) {
  p.push(`${title}0${j}`);
}

p.forEach(i => {
  execFile('node', ['proc2', i]);
});

setTimeout(()=>'', 300000);