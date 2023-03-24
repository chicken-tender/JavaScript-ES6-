// 문자열
let string = "Hello, JavaScript !!!";
console.log(string);

let string2 = "저는 '홍길동' 입니다.";
console.log(string2);

let string3 = '저는 "이순신" 입니다.';
console.log(string3);

let name1 = "강감찬";
let string4 = `저는 ${name1} 입니다.`;
console.log(string4);

let addr = "경기도 수원시";
let name2 = "김아무개";
console.log("제 이름은 " + name2 + "이고, 사는 곳은 " + addr + " 입니다.");

let 인사말 = "안녕하세요. \'이땡땡\'님";
console.log(인사말);

let string5 = "이스케이프 문자를 이용해서\n줄 바꿈하고 싶어요.";
console.log(string5);

// ES6에서 추가된 템플릿 문자열 사용하기
let dan = 3;
let gugu = 8;
let rst = `${dan} * ${gugu}은 ${dan * gugu} 입니다.`;
console.log(rst);

/* ------------------------------------------------------ */
// 숫자형 (Number) : 자바스크립트는 정수와 실수를 구분하지 않고 전부 하나의 숫자 자료형으로 취급 합니다.
let num1 = 10;
let num2 = 0.1;
console.log(num1 + num2);
console.log(num2);

let sum = 0.1 + 0.2;
console.log(sum); // 실수는 근사치기 때문에 정확한 값은 안나옴.

// toString() : 숫자형 데이터를 문자형 데이터로 변환해주는 함수 입니다.
let x = 123;
console.log(typeof(x));
console.log(typeof(x.toString()));

/* ------------------------------------------------------ */
// 논리형 : 참과 거짓을 구분 (true / false)
let age = 20;
let isAdult = (age > 18) ? true : false;
console.log(isAdult);

/* ------------------------------------------------------ */
// 특수 자료형 : undefined, null

// undefined : 변수와 상수를 선언하면 생성한 저장공간에 데이터를 할당하는 것이 일반적인데 할당이 되지 않으면 임시적으로 undefined 상태를 만듦.
let empty;
console.log(empty);

// null : 변수나 상수를 선언하고, 의도적으로 선언한 공간을 비워둘 때 할당
let empty2 = null;
console.log(empty2);