// ⭐️ 정규 표현식(regExp) : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴 입니다.
// const regexp = /World/;
// const regexp = new RegExp("World");
let str = "Hello World! World!";
const re = /World/;
console.log(re.test(str)); // 해당 문자열의 포함 여부 확인
console.log(str.search(re)); // 해당 문자열의 시작 위치 반환

// exec() : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약, 패턴과 일치하는 문자열이 없으면 null 반환
let targetStr =
  "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결정 찾기, 가장 좋은 선물은 용서";
let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst = /가장큰+/.exec(targetStr);
console.log(firstRst);
console.log(`exec() : ${secondRst}`);

// test() : 인수로 전달된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 true, 없으면 false
let targetStr2 =
  "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결정 찾기, 가장 좋은 선물은 용서";
let firstRst2 = /가장+/.test(targetStr2); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst2 = /가장큰+/.test(targetStr2);
console.log(`test() : ${firstRst2}`);
console.log(`test() : ${secondRst2}`);

// 전화번호 검사하기
// \d : 숫자를 의미
// {} 안의 숫자는 개수 를 의미
let inputNum = "010-1234-5678";
const regex = /\d{3}-\d{4}-\d{4}$/;
let rst = regex.test(inputNum);
if (rst) {
  console.log("로그인 성공!");
} else console.log("로그인 실패! 핸드폰 번호에 하이픈(-)을 입력해주세요.");

// match() : 전화번호 추출하기 (주어진 문자열의 처음부터 패턴 매칭을 수행)
const inputText = "안녕하세요. 제 번호는 010-9090-8080 입니다. 연락 주세요.";
const regex2 = /\d{3}-\d{4}-\d{4}/;
let regNumber = inputText.match(regex2);
console.log(regNumber);
console.log(regNumber[0]);

console.log("\n");

// 전화번호 여러개 추출하기(g)
// \d{2,3} : 숫자 2 ~ 3개로 시작
// g : 매칭되는 모든 항목 찾기
const inputText2 = "안녕하세요. 제 번호는 010-3212-2323, 032-872-2142 입니다.";
const regex3 = /\d{2,3}-\d{3,4}-\d{4}/g;
let regNumber2 = inputText2.match(regex3);
// console.log(regNumber2);
// for(let i of regNumber2) console.log(i);
regNumber2.forEach((i) => console.log(i));

// 정규식 주요 패턴에 대한 사용 예제
const regex4 = /오늘의/; // 단순 글자 찾기
const regex5 = /010/g; // 010으로 시작되는 모든 문자열 찾기
const regex6 = /[a-zA-Z]/g; // 모든 알파벳 대소문자 찾기
const regex7 = /[^0-9]/g; // 숫자가 아닌 문자 모두 찾기
const regex8 = /[ㄱ-ㅎ가-힣]/g; // 모든 한글 찾기
const inputText3 = "Hello. 제 번호는 010-3212-2323, 032-872-2142 입니다.";
let rst2 = inputText3.match(regex8);
console.log(rst2);

// 웹사이트 주소 정규식 검사하기
// http:// 혹은 https:// 로 시작하고, 알파벳, _, -, . 으로 이루어져 있음
// /https?:\/\/[\w\-\.]+/g
const text = "구입 문의는 http://gongumarket.com https://google.com 010-2323-2312 으로 주시기 바랍니다.";
const regex9 = /https?:\/\/[\w\-\.]+/g;
let rst3 = text.match(regex9);
console.log(rst3);
