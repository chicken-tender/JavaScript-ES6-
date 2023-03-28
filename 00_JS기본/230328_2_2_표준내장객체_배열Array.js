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
console.log(fruits.join(" "));

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