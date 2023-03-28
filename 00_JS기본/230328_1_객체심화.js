// 객체는 중괄호를 사용하여 만듦, 속성(property)과 값(value)의 쌍으로 이루어짐.
const person = {
  title : "크라임씬2",
  name : "박지윤",
  age : 44,
  job : "아나운서"
};
console.log(person.age);

const person20 = { // 중첩
  name : {
    firstName : "지윤",
    lastName : "박"
  },
  age : 44,
  isAdult : true,
  printInfo : function() {
    return this.name;
  }
};
console.log(person20.printInfo().firstName);
console.log(person20[`isAdult`]);

person20.name.firstName = "Jiyoon";
person20.name.lastName = "Park";
console.log(person20.name); // 변경됨 확인

// 속성 추가 못한게 있다면 아래와 같은 방법으로 별도 추가도 가능함.
const carInfo = {};
carInfo.name = "테슬라";
carInfo.year = 2022;
carInfo.maxSpeed = 300;
console.log(carInfo);

// 속성 삭제
delete carInfo.maxSpeed;
console.log(carInfo);

let person3 = {
  name : "홍길동",
  age : 18,
  sayHello : function() {
    console.log(`Hello~ my name is ${this.name}`);
  }
};
person3.sayHello();

// 객체 생성자(new) : 객체 생성자는 템플릿으로 사용하여 동일한 속성과 메소드를 가진 객체를 여러개 생성할 때 사용
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`Hello.. my name is ${this.name}`);
  };
};

let person4 = new Person("이순신", 55);
person4.sayHello();
console.log(person4);

