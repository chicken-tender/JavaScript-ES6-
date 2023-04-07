// ES6 : 자바스크립트의 6번째 버전으로 2015년에 발표

// 1️⃣. 가변 변수와 불변 변수 : let, const
// 자바스크립트도 기본타입과 객체 타입으로 나누어지며, 객체 타입의 경우 주소를 가진다.

const arr = [1, 2, 3];
arr[0] = 100;
// 오류가 안나는 이유 : 참조 주소는 변경되지 않고, 주소가 가리키는 값만 변경됐기 때문에..
// 정리하면 property, value는 const도 변경 가능
console.log(arr); // [100, 2, 3]

// arr = [4,5,6]; // const에 새로운 객체 참조 주소를 대입하는 것이기 때문에 오류.

const arr1 = [1, 2, 3];
const arr2 = arr1.concat([4, 5, 6]);
console.log(arr2);
console.log(arr1); // 변형되지 않음.

// 2️⃣. 화살표 함수 : 화살표 함수는 간단하고 간결한 코드를 작성하는데 유용
const add = (num1, num2) => console.log(num1 + num2);
add(4, 3);

// ✨ 화살표 함수 사용시 this 문제 해결 가능!
/* 기존의 함수 정의 방식에서 함수 내부에서 this 키워드를 사용 할 때,
호출되는 위치에 따라 참조하는 객체가 다르게 결정되는 문제가 있음 */
const obj = {
  name: "홍길동",
  func1() {
    const func2 = function () {
      console.log(this.name);
    };
    func2();
  },
};
obj.func1(); // undefined

const obj2 = {
  name: "홍길동",
  func1() {
    const func2 = () => console.log(this.name);
    func2();
  },
};
obj2.func1(); // 홍길동

/* --------------------------------------------- */
const btn1 = document.getElementById("myButton1");
const btn2 = document.getElementById("myButton2");

btn1.addEventListener("click", () => console.log(this));
// 이 때는 this 말고 btn1 넣으면 정상적으로 찾아줌. ㅋㅋ

btn2.addEventListener("click", function () {
  console.log(this);
});
/* --------------------------------------------- */
const pBtn = document.getElementById("pButton");
const pEls = document.querySelectorAll("p");
pBtn.addEventListener("click", () => pEls.forEach((e) => console.log(e)));

// 3️⃣. 템플릿 리터럴 : 백틱(``)으로 묶는 문자열을 템플릿 리터럴이라고 합니다.
// 템플릿 리터럴은 변수를 쉽게 포함할 수 있고, 여러 줄의 문자열을 쉽게 표시할 수 있습니다.
const userName = "홍길동";
const season = "봄";
const message = `안녕하세요, ${userName}님, ${season}이 왔습니다.`;
console.log(message);

// 4️⃣. 전개 연산자(Spread operator) : 배열이나 객체를 개별 요소로 분리
const arr3 = [1,2,3];
const arr4 = [4,5,6];
const newArr = [...arr3, ...arr4];
console.log(newArr);

const arr5 = [1,2,3,4,5,100];
const arr6 = [...arr5];
console.log(arr6);

// 전개 연산자를 이용한 가변 인수 함수 만들기
function sum(...numbers) {
  return numbers.reduce((tot, num) => tot + num, 0);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));