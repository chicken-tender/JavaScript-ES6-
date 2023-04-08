// XMLHttpRequest()는 타임 아웃 걸 때가 없어서 서버에서 응답 없으면 무한대기 걸려버리는 단점이 있다.)
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URI
xhr.setRequestHeader("content-type", "application/json"); // 헤더 값 content-type 정의
const data = {
  // 아래 변수들은 추후에는 input에서 받아온 값(~.value)이 들어감.
  id : "test1",
  pwd : "test!@#$1",
  name : "홍길동",
  addr : "서울시 강남구" 
}
xhr.send(JSON.stringify(data)); // XMLHttpRequest 객체를 사용하여 서버로 HTTP 요청을 보내는 메소드
// GET은 open()에 정보를 다 담아서 보내기 때문에 send()는 parameter가 없음.
// POST는 send()에 정보를 담아서 보내기 때문에 외부에서 확인 불가

// XMLHttpRequest 객체를 사용하여 서버로부터 HTTP 응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티
xhr.onload = () => { // onload() : 로딩이 되면 ...(서버가 응답을 주면) 'onload()'가 불려지는..콜백 함수
  // XMLHttpRequest 객체에서 요청이 공적으로 완료되었을 때 호출되는 핸들러
  if (xhr.status === 201) {
    // 정상적으로 응답되면 status가 200이나 해당 test 사이트는 201이 정상 응답인가 봄.
    // const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
    console.log(xhr.response);
  } else {
    // 에러 발생
    console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지를 출력
  }
};