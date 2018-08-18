process.title = process.argv[2];

const { execFile } = require('child_process');

const p = [];

for(let i = 3; i >= 1; i--) {
  for (let j = 1; j <= 3; j++) {
    for (let k = 1; j <= 3; k++) {
      p.push(`${i}0${j}`);
    }
  }
}

p.forEach(i => {
  execFile('node', ['proc2', i]);
});

