
console.log('lodding')
console.clear();

//log level
console.log('log'); //개발
console.info('info'); //정보
console.warn('warn'); //경보
console.error('error'); //에러

//assert 조건이 아닐 때, 출력할 값
console.log(2===3,'not same');
console.log(2===2,'same');

const student = {
  name:'Nora',
  age:30,
};
console.table(student);

//measuring time // loop도는 시간 측정 해 볼 수 있다.
console.time('for loop'); //for loop를 레이블 이라고 한다.
for(let i = 0; i<10; i++){
  i++;
}
console.timeEnd('for loop')

//couting //함수가 몇번 호출 되었는지 알 수 있다.
function a(){
  console.count('a function');
}
a();
console.countReset('a function');
a();

//trace 디버깅할 때 어디서 함수가 호출되었는지 추적할 수 있다.
function f1(){
  f2();
}
function f2(){
  f3();
}
function f3(){
  console.log('f3')
  console.trace();
}
f1();

function hello(){
  console.log(this);
  console.log(this===global);
}
hello();

class X{
  constructor(num){
    this.num=num;
  }
  memberFunction(){
    console.log('------class-------')
    console.log(this);
    console.log(this===global);
  }
}
const x = new X(1);
x.memberFunction();