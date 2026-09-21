const fs = require('fs');

fs.writeFileSync('scratch.txt', 'Hello from the fs module!\n');

console.log('1: about to call readFileSync');
const syncData = fs.readFileSync('scratch.txt', 'utf8');
console.log('2: readFileSync result:', syncData.trim());

console.log('3: about to call readFile (async)');
fs.readFile('scratch.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('5: readFile (async) result:', data.trim());
});
console.log('4: this line runs before the async callback above');
