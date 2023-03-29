// (1) 비파괴적 메서드 : 요소를 사용하되 변경하지 않는 것 (자바 stream API와 동일 - 원본 데이터를 변경하지 않습니다.) ** React에서도 자주 나옴

// forEach() : 요소를 순회
const arr = [10, 20, 30, 40, 50];
arr.forEach(function(n) {
  console.log(n);
});

// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["사과", "오렌지", "딸기", "수박"];
console.log(fruits.toString());

// join() : 배열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합
console.log(fruits.join(" * "));

// pop() : 스택 자료 구조이며 마지막에 추가된 값을 제거 합니다.
console.log(fruits.pop()); // 수박
// push() : 스택 자료 구조이며 배열에 새로운 요소(데이터,객체)를 추가합니다.
fruits.push("체리");
console.log(fruits); // [ '사과', '오렌지', '딸기', '체리']

// shift() : 배열에서 첫 번째 요소를 제거하고 값을 반환 합니다.
console.log(fruits.shift()); // 사과
// unshift() : 배열의 맨앞에 요소를 추가하고 배열의 길이를 반환
console.log(fruits.unshift("배")); // 4
console.log(fruits); // ['배', '오렌지', '딸기', '체리']

// 배열 요소 변경
let fruits2 = ['키위', '망고', '토마토', '귤'];
fruits2[0] = "한라봉";
console.log(fruits2); // [ '한라봉', '망고', '토마토', '귤' ]

// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["망고", "레몬", "자두"];
let totalFruit = arr5.concat(arr6,arr7);
console.log(totalFruit);

// slice() : 시작 인덱스부터 종료 인덱스 미만까지의 배열 요소 잘라냄
let fruit10 = ["바나나", "오렌지", "사과", "망고", "레몬"];
let slice1 = fruit10.slice(0,2);
console.log(slice1); // [ '바나나', '오렌지' ]
let slice2 = fruit10.slice(2);
console.log(slice2); // [ '사과', '망고', '레몬' ]

// sort() : 오름차순 정렬
fruit10.sort();
console.log(fruit10); // [ '레몬', '망고', '바나나', '사과', '오렌지' ]

// reverse() : 내림차순 정렬
console.log(fruit10.reverse()); // [ '오렌지', '사과', '바나나', '망고', '레몬' ]

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열 생성 **핵심!!
let person = [
  {
    name : "유재석",
    point : 81,
    address : "강남구" 
  },
  {
    name : "박명수",
    point : 60,
    address : "강북구"
  },
  {
    name : "정준하",
    point : 72,
    address : "강남구"
  },
  {
    name : "정형돈",
    point : 88,
    address : "마포구"
  },
  {
    name : "노홍철",
    point : 90,
    address : "강서구"
  },
  {
    name : "하하",
    point : 50,
    address : "금천구"
  }
];
// point가 80 이상인 사람의 이름만 출력
let pass = person.filter(e => e.point > 80); // 변수 pass는 배열로 만들어짐
pass.forEach(function(e) {
  console.log(e.name);
});
/*
유재석
정형돈
노홍철 */

