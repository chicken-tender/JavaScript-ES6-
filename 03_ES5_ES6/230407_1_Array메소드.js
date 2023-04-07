// Array 메소드 : ES5에서 추가 되었으며, 코드를 간결하고 효율적으로 만들어줌
// ⭐️ 원본 데이터를 변형 시키지 않음
// forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드
// map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듭니다.
// filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듭니다.
// reduce() : 배열의 모든 요소를 순회하여, 순회 과정에서 누적값을 사용하여 하나의 결과 값을 만듭니다.

let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.forEach((num) => console.log(num));

let squares = numbers.map(num => num * num);
console.log(squares);

let evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

let sum1 = numbers.reduce((tot, num) => tot + num, 0);
console.log(sum1);