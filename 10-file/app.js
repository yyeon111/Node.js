//file system 임포트 하기 
const fs = require('fs');


//3가지 형태의  APIs
//rename(..., callback(error,data))  =>비동기 기다리지 않는다. 콜백함수는 에러가 발생했는지 성공해서 데이터를 가져왔는지에 대한 인자가 전달된다.
//전달받은 인자들을 통해 필요한 일을 다 한 다음에  callback함수를 호출 해 준다.
//renameSync(...) =>blocking  동기, 무조건 수행 다하고 다음 일 실행한다. 콜백함수 필요가 없다.
//대신에 잘못되면 에러가 발생한다. 동기가 잘못되면 에러가 발생한다.
//에러가 발생하면 노드가 죽기 때문에 에러를 방지하기 위해 try catch로 항상 감싸줘야한다.
//try{renameSync(...)}catch(error){}
//끝날 때 까지 다음 줄로 넘어가지 않는다.
//promises 형태로 제공된다.
//promises.rename().then().cathc() promises와 rename이 만나면 promise형태로 사용 할 수 있다.

try{
  fs.renameSync('./text.txt','./text-new.txt')
} catch(error){
  console.error(error);
}
console.log('hello');
//기존 파일 이름을 새로운 파일 이름으로 변경하는 API
//존재하지 않는 파일 이름을 변경하려고 하면 에러가 발생할 수 있다. 다음 코드가 실행되지 않음
//node가 죽지 않기 위해서는 에러를 잡아야 한다 try{}catch(erorr){} = 동기적이기 때문에 가급적 사용하지 않는 것이 좋다.

fs.rename('./text-new.txt','./text.txt',(error)=>{
  console.log(error); //  에러가 발생하지 않았기 때문에 null이 출력이 된다.
}) //callback 함수에 에러가 발생했을 때의 실행
console.log('hello');//비동기적은 언제 실행될지 모른다.

//비동기적으로 처리할 때 콜백함수가 지저분하게 생각이 되는 사람이 사용하는 방법
fs.promises.rename('./text2.txt','./text-new.text')
.then(()=>console.log('Done!'))
.catch(console.error);
