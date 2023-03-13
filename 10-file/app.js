const fs = require('fs');

try{
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

console.log('hello!');

fs.rename('./text2.txt', './text-new.txt', (error) => {
  console.log(error);
});

console.log('hello');
console.log('2');
console.log('3');

fs.promises.rename('./text.txt', './text-new.txt')
.then(() => console.log('Done!'))
.catch(console.error);