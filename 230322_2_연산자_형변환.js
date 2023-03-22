// 산술연산자 : 수학 연산을 수행하는 연산자를 의미
let a = 2;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // 몫을 구하려면 parseInt 해줘야 함.
console.log(a % b);
console.log(a ** b); // 거듭 제곱, 2^3
console.log(--a); // 전위 단항 연산자, 1
console.log(b++); // 후위 단항 연산자, 3

// 대입 연산자 : 대입연산자와 복합 대입연산자가 있음
let x = 10;
let y = 20;

// x = x + 10; : x에 10을 더해서 x에 다시 대입
x += 10; // 복합 대입 연산자
console.log(x);

y *= 10;
console.log(y);

// ... 생략

// 비교 연산자 : 피연산자를 비교한 뒤 참 or 거짓으로 반환하는 연산자(조건문과 결합되어 사용) - 동등 연산자, 일치 연산자

// 1. 동등 연산자 : 자바스크립트에서 동등 연산자로 두 값을 비교하는 경우, 데이터 형이 다르면 자동으로 형변환이 일어납니다. (!!..왜??)
console.log(1 == '1'); // true, 문자열로 형변환이 일어난 후 비교 진행..

// 2. 일치 연산자 : 값과 형이 모두 같은지 비교하는 연산자 (되도록 일치 연산자를 쓰는 것이 좋음)
console.log(1 === '1'); // false
console.log(1 !== '1'); // true

let val = 100;
if(val !== '100') {
  console.log(`${val}은 '100'이 아닙니다.`);
} else console.log(`${val}은 100 입니다.`);

// 논리 연산자 : 항상 비교 연산자와 결합되어 사용
// &&(and), ||(or), !(not)
let aa = 10;
let bb = 5;
let cc = 15;
console.log(aa > bb && cc > bb); // true
console.log(aa > bb || aa > cc); // true
console.log(!(aa > bb && cc > bb)); // false

// 삼항 연산자 : 피연산자가 3개 ** 자주 쓰임
let num = 7;
const rst = (num % 2 === 0) ? "짝수" : "홀수";
console.log(rst);

let age = 20;
const isAdult = (age > 18) ? "성인" : "미성년자";
console.log(`${age}살은 ${isAdult} 입니다.`);

// 형변환
// 1. 묵시적 형변환 : 자바스크립트가 자동으로 수행하는 것
let num1 = 10 + "10";
console.log(num1); // 1010
console.log(typeof(num1)); // string

if(10 == '10') console.log("true(묵시적 형변환이 일어나 값이 같음)");

// 2. 명시적 형변환 : 개발자가 의도를 가지고 형변환을 하는 것
let num2 = 10;
let num3 = "10";
console.log(10 + Number(num3)); // 20

let num4 = 10;
let str = String(num4);
console.log(10+str); // 1010