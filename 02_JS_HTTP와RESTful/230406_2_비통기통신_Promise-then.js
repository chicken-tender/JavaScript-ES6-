// Fetch API : XMLHttpRequest 방식과 가장 큰 차이점은 Promise 방식으로 구현

// GET - 정보 조회
// 업계 기본 값은 GET 방식, JSON 형태이기 때문에 안넣어도 정보는 넘어옴.
fetch("https://jsonplaceholder.typicode.com/posts/1") // userId 1인 객체만 요청
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// POST - 데이터 생성
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    //전송할 데이터
    title: "테스트 입니다.",
    userName: "홍길동",
    userId: "test1",
  }),
  headers: {
    //헤더 값 정의
    "content-type": "application/json; charset=UTF-8", //content-type 정의
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT - 데이터 수정
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "PUT 테스트",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE - 데이터 삭제
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});