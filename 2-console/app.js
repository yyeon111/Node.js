console.log('logging...');
console.clear();

//🤍 log level
console.log('log');
console.info('info');
console.log('warn');
console.log('error');

const 똑순이 = '나는';
console.assert('나는'==='바보' , '아니다');
console.assert('나는'===똑순이, '맞아');

const student = {name: 'Nora', 'age': 20, company: { name: {name: {name: 'AC'}}}};
console.log(student);
console.table(student);
console.dir(student ,{showHidden: false, color: false, depth: 0,});
console.dir(student,{showHidden: true, color: false, depth: 0});

console.time('for loop');
for(let i = 0; i < 10; i++){
  i++;
}
console.timeEnd('for loop');

function a(){
  console.count('a function')
}
a();
console.countReset('a function');
a();
a();

function f1(){
  f2();
}
function f2(){
  f3();
}
function f3(){
  console.log('f3');
  console.trace();
}
f1();