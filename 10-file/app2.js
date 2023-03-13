const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((error) => console.error('에러',error));

// fs.writeFile('./text.txt', 'zz')
//   .then(() => {
//     fs.appendFile('./text.txt', 'ZZ')
//       .then(() => {
//       fs.copyFile('./text.txt', './text2.txt')
//       .catch(console.error); 
//       })
//       .catch(console.error);
//   })
//   .catch(console.error);

//   fs.mkdir('sub-folder')
//     .catch(console.error);

fs.readdir('./')
  .then(console.log)
  .catch(console.error);