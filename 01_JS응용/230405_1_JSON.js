// JSON(JavaScript Object Notation) : 자바스크립트 객체를 문자열로 표현하는 데이터 포맷
// ⭐️특징 1. JSON을 사용하면 객체를 ^직렬화^ 할 수 있습니다.
  /* 🩷직렬화 : 기본 데이터는 1바이트, 2바이트, 4바이트 등 타입 별로 크기가 다르기 때문에 받는 입장에서 해석하기가 어려움. 이를 보완하기 위해 문자열로 변환하여 공백 없이 연달아 붙여서 전달하는 것(?) */
// ⭐️특징 2. 원래는 자바스크립트 언어로부터 파생되었지만 현재는 언어에 독립적으로 사용 됩니다. (자바 직렬화는 자바끼리만 가능함)
// ⭐️특징 3. JSON은 두 가지 기본 자료구조인 '객체'와 '배열'을 기반하며, 웹 서버와 웹 어플리케이션 간의 데이터 교환에 사용
// ⭐️특징 4. XML 대안으로 자주 사용

// JSON => 객체 리터럴로 변환
// 해당 데이터의 입력은 주로 ajax, Fetch API, Promise, Axios 등의 비동기통신으로 부터 전달 받음
const jsonString = '{"name": "안유진", "age": 21, "city": "서울시 강남구"}'; // 실제 로우 데이터 형식
const jsonObject = JSON.parse(jsonString); // JSON => 객체 리터럴로 반환
console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);

// 자바스크립트 객체를 JSON 문자열로 변환하기
let memberInfo = [ // 배열 안에 객체를 넣어 여러 개를 관리할 수 있다.
  { // 0번 객체
    name : "이영지",
    age : 22,
    job : "래퍼",
    addr : "서울시 강남구 청담동"
  },
  { // 1번 객체
    name : "김은지",
    age : 30,
    job : "개그우먼",
    addr : "경기도 수원시 매탄동"

  },
  { // 2번 객체
    name : "안유진",
    age : 21,
    job : "아이돌",
    addr : "서울시 마포구 공덕동"
  }
];
let json = JSON.stringify(memberInfo); // 변환한 변수 json을 SpringBoot Controller에 보내는..
console.log(json);