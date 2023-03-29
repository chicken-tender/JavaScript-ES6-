// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date);

// 인스턴스 만들기 (시간 세팅하는 법)
// 월(月)은 0부터 시작, GMT 기준 시간으로 설정 됨. 
const date1 = new Date(2022, 11, 27, 18, 30, 50);
console.log(date1);
// 원하는 달로 입력 됨
const date2 = new Date("2022-12-25/18:30:50");
console.log(date2);

// Date 객체의 메소드
let myDate = new Date();
console.log(myDate.getFullYear()); // 2023 (현재 연도 출력)
console.log(myDate.getMonth()+1); // 3 (월(月)은 0부터 시작하기 때문에 1 추가)
console.log(myDate.getDate()); // 29
console.log(myDate.getDay()); // 3 (현재 요일 출력 - 월요일(1)부터 시작)
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 분 출력
console.log(myDate.getSeconds()); // 초 출력
console.log(myDate.getTime()); // 1970.01.01 00:00 부터 지금까지 경과 시간(밀리초) 반환


