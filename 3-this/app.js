function hello(){
  console.log(this);
  console.log(this === global);
}
hello();

console.clear();

class A {
  constructor(num){
    this.num = num;
  }
  a () {
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.a();

console.log('---global scope---')
console.log(this);
console.log(this === module.exports);
