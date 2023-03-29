// 자바 API 클래스와 비슷..

// length : 문자열의 길이 체크
const pw = "123";
if(pw.length < 4) {
  console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}

// includes() : 특정 문자열의 포함 여부 확인
const email = "test_naver.com";
if(!email.includes("@")) {
  console.log(`올바른 이메일 형식이 아닙니다.`);
}

// indexOf() : 대상 문자열과 일치하는 첫 번째 문자의 인덱스 반환 
const email2 = "test_naver.com";
if(email2.indexOf("@") === -1) {
  console.log(`@가 누락되었습니다.`);
}

// lastIndexOf() : 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 인덱스 반환
const email3 = "@test@naver.com@";
console.log(email3.lastIndexOf("@"));

// slice() : 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환
// slice(n,-1)을 주면 n부터 끝에서 한글자 빼고 출력
let str = "Apple, Banana, Kiwi";
let rst = str.slice(0,5);
console.log(rst);
console.log(str); // 불변성 원칙 (원본 보존)
console.log(str.slice(0,5)); // 이렇게 해도 str은 원본 유지됨
console.log(str); // Apple, Banana, Kiwi
console.log("\n");

// subString() : 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환
// subString(n,-1)을 주면 0번부터 n번째 미만 출력
let str2 = "Apple, Banana, Kiwi";
let rst2 = str2.substring(7,-1);
console.log(rst2);

// replace() : 문자열 내의 특정 문자열의 첫번째 인덱스 값을 지정한 문자열로 바꾸는 함수
let str3 = "지구오락실, 이영지, 안유진, 미미, 이은지, 안유진";
let newStr = str3.replace("안유진", "나영석");
console.log(newStr); // 지구오락실, 이영지, 나영석, 미미, 이은지, 안유진

// replaceAll() : 문자열 내의 특정 문자열을 지정한 문자열로 '모두' 바꾸는 함수
let newStr2 = str3.replaceAll("안유진", "나영석");
console.log(newStr2); // 지구오락실, 이영지, 나영석, 미미, 이은지, 나영석

// toUpperCase(), toLowerCase() : 대소문자 변경
let alpha = "Better late than never.";
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());

// ** concat() : 리액트에서 자주 쓰임.. 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// 기존 문자열을 변경하지 않고, 합쳐진 새로운 문자열을 생성(불변성)
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3); // Hello World

// trim() : 문자열의 앞, 뒤 공백 제거
let str4 = " Hello World! ";
console.log(str4.trim());

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 길이만큼 추가하는 함수
let str11 = "5";
let str12 = "5";
str11 = str11.padStart(4, 0); // 총 길이, 자리가 비는 경우 0으로 채우는. . 
console.log(str11);
let str13 = str12.padEnd(4, 0); 
console.log(str13);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
let addr = "서울시 강남구 역삼동";
console.log(addr.charAt(0));

// charCodeAt() : 문자열에 특정 인덱스에 해당하는 문자 하나의 유니코드 반환(아스키코드)
let str20 = "HELLO WORLD";
console.log(str20.charCodeAt(0));

// ** split() : 특정 문자 기준으로 문자열을 잘라서 새로운 문자열 배열 생성
let birthDay = "1999-02-03";
let arr2 = birthDay.split("-");
console.log(arr2);