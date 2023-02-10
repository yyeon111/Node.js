console.log('code1');

console.time('Timer');
setTimeout(()=>{
  console.log('setTimeout 0')
},0);
console.timeEnd('Timer');

console.log('code2');
setImmediate(()=>{
  console.log('setImmediate');
}); //setTimeout과 동일하게 동작한다.

console.log('code3');
process.nextTick(()=>{
  console.log('nextTick');
})