// 수학 연산을 다루는 Math 객체 (자바랑 똑같음~)
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(1.1)); // 2
console.log(Math.floor(1.9)); // 1
console.log(Math.round(1.4)); // 1
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(9)); // 3
console.log(Math.random()); // 0 이상 1 미만의 임의의 수

// Math.random() : 0 보다 크고 1 보다 작은 숫자형 값을 반환
let a = Math.floor(Math.random() * 10); // 0 ~ 9 정수값 반환
console.log(a);

let b = parseInt((Math.random() * 10) + 1); // 1 ~ 10 정수값 반환
console.log(b);