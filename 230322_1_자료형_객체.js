// 배열 : 자바스크립트의 배열은 모든 자료형을 저장할 수 있습니다.
//      * 또 다른 배열을 포함할 수도 있습니다.
let score = [80, 99, 77, 65];
console.log(score);
// 인덱스로 요소를 접근함. (인덱스는 항상 0부터 시작)
console.log(score[0]);

/* let은 변수를 만드는 키워드!(자바스크립트는 변수를 만들 때 자료형을 지정하지 않으며 값이 대입될 때 데이터의 형이 결정 됨 - 동적언어) */

// 자바스크립트의 배열은 모든 자료형을 함께 사용할 수 있습니다. (파이썬의 리스트와 동일한 특성)
let array = ["아이브", "안유진", 21, true, [100,90,82], ["곰돌이", "수원시", "경기도"]];
console.log(array);
console.log(array[4][1]); // 90
console.log(array[0][1]); // 이
console.log(array[2][1]); // undefined
console.log(array[5][0][0]); // 곰

// 빈 배열 생성 후 동적으로 값을 대입할 수 있음.
let arr = [];
arr[0] = 100;
arr[1] = "자바스크립트";
console.log(arr);

// 객체 리터럴 : 중괄호{}를 사용해서 정의하고, key와 value가 한쌍으로 이루어집니다.
// * 자바의 Map과 유사합니다. Map은 new를 이용해 객체를 생성해서 사용

// 일반배열
let score1 = [80, 99, 77, 65];
// 객체 리터럴
let score2 = {
  kor : 80,
  eng : 99,
  mat : 77,
  scn : 65
};
// 객체 리터럴 접근 방법 (둘 다 많이 쓰임)
console.log(score2.kor); // .(도트)로 접근(객체기 때문에)
console.log(score2['mat']); // []에 key를 넣어서 접근하는 방법

const person = {
  name : "홍길동",
  age : 18,
  city : "seoul",
  // 객체 리털에서 함수 사용
  getInfo : function() {
    return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
  }
};
console.log(person.getInfo());

// typeof : 데이터형을 확인하는 예약어
let name1 = "이순신";
console.log(typeof(name1));

// toString() : 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Melon"];
console.log(fruits.toString()); // Banana,Orange,Apple,Melon
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Melon' ]
