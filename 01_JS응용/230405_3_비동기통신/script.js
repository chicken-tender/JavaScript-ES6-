// 객체 생성
const xhr = new XMLHttpRequest();
xhr.open("POST", "URL 경로"); // IP주소, port번호, 백엔드가 수신할 컨트롤러
// 집 주소(==ip주소)에 사는 누구(==port번호)야, 이런 일을 해!(컨트롤러)
// GET(정보 조회, 경로가 드러남) / POST(로그인(회원 정보) 전달.. 경로가 드러나지 않음)

xhr.setRequestHeader("content-type", "application/json");
const data = {
  id : 100,
  title : "비동기 통신 연습하기",
  author : "홍길동"
}; // 실제로는 프론트엔드 입력창에서 받음

xhr.send(JSON.stringify(data)); // 실행하면 "URL 경로"로 날아감


