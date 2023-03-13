const { log } = require('console');
const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

console.log(path.basename(__dirname));
console.log(path.basename(__filename,'.js'));
console.log(path.dirname(__filename));
console.log(__dirname);

console.log(path.extname(__filename));

console.log(path.parse(__filename));

const parsed = path.parse(__filename);
console.log(parsed.root);

console.log(path.format(parsed));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('../'));
console.log(path.dirname('../')); //어느 경로로 될지 모름

console.log(path.normalize('./folder//////sub'));

console.log(__dirname + path.sep + 'image');