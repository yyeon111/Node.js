console.assert(2===3,'not same');
const os = require('os');
console.log(os.EOL==='\n');
console.log(os.EOL==='\r\n');

const path = require('path');


console.log(__dirname);
console.log(__filename);
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(__filename));
const parsed = path.parse(__filename);
console.log(path.format(parsed));

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute('../'));

console.log(path.join(__dirname,'image'));

console.log(path.dirname);