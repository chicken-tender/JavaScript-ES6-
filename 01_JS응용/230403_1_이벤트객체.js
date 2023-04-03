const btnEl = document.querySelector("button");
btnEl.addEventListener("click", function(e) {
  console.log("버튼이 눌려졌습니다." + e);
  console.log("x좌표 : " + e.clientX);
  console.log("y좌표 : " + e.clientY);
  console.log("마우스가 클릭된 x 좌표 : " + e.pageX);
  console.log("마우스가 클릭된 y 좌표 : " + e.pageY);
  console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 x 좌표 : " + e.screenX);
  console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 y축 좌표 : " + e.screenY);
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event) {
  console.log(`keyCode : ${event.key}`);
  console.log(`ctrlKey : ${event.ctrlKey}`);
  console.log(`altKey : ${event.altKey}`);
  console.log(`shiftKey : ${event.shiftKey}`);
});

// 이벤트 취소하기 : html 태그 중 일부는 기본으로 이벤트가 적용되어 있습니다.
// 대표적으로 a 태그와 form 태그가 해당 됩니다.
// target 속성은 이벤트가 발생한 요소를 나타냅니다.(React에서 확인 예정)
// preventDefault() 메소드를 사용하면 태그에 기본으로 연결된 이벤트 취소
// ⭐️ 예) form 태그에 addEventListner 걸 때 정보를 서버에 전달하기 위해 사용할 경우,기본으로 연결된 이벤트 취소해줘야 함!!! (인라인일 때는 return false;)
const aEls = document.querySelectorAll("a");
for(let e of aEls) {
  e.addEventListener("click", function(event) {
    // 기본 이벤트 취소
    event.preventDefault();
  });
}

const formEl = document.getElementById("myForm");
formEl.addEventListener("submit", function(event) {
  // 기본 이벤트 취소
  event.preventDefault(); // 폼 제출 기본 동작 막기
});