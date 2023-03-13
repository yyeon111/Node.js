let count = 0;

function increase(){
 count++; 
}

function getCount(){
  return count;
}

// module.exports.increase = increase;
module.exports.getCount = getCount;
console.log(module);
console.log(module.exports === exports);
// exports.increase = increase;
console.log(module.exports === exports);
// exports = {};
// console.log(module.exports === exports);
// exports.increase = increase;
console.log(exports);
exports = {};
console.log(exports);
console.log(module.exports);
exports.increase = increase;
console.log(module.exports);