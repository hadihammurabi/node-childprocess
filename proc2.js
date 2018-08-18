title = process.argv[2];
process.title = `[${title}]`;

const { execFile } = require('child_process');

const p = [];

for (let i = 10; i <= 30; i+=10) {
  p.push(parseInt(title) + i);
}

p.forEach(i => {
  execFile('node', ['proc3', i]);
});

setTimeout(()=>'', 300000);