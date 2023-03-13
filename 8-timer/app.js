// let num = 1;

// const interval = setInterval(() => {
//   console.log(num++);
// }, 1000);

// setTimeout(() => {
//   console.log('Time OUT!');
//   clearInterval(interval);
// }, 6000);

// console.time('im')
// setImmediate(()=>{
//   console.timeEnd('im');
//   console.log('Immediately!');
//   }
// )

console.time('set')
setTimeout(() => {
  console.timeEnd('set');
  console.log('TimeOut!');
},0)

console.time('im')
setImmediate(()=>{
  console.timeEnd('im');
  console.log('Immediately!');
  }
)