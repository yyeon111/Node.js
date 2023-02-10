//각 모듈에서 지원하는 기능들이 있다.
// const process = require('process');

// console.log(process.execPath);
// console.log(process.version);
// console.log(process.pid);
// console.log(process.ppid);
// console.log(process.platform);
// console.log(process.env);
// console.log(process.uptime());
// console.log(process.cwd());
// console.log(process.cpuUsage());

setTimeout(()=>{
  console.log('setTimeOut');
},0);

process.nextTick(()=>{
  console.log('nextTick'); //콜백 함수중 우선순위가 높다.
});

for(let i = 0; i<100; i++){ //가장먼저 실행
  console.log('for loop');
}
