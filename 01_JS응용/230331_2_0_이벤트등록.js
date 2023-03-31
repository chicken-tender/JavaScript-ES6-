// 이벤트 등록하기 : 이벤트가 발생할 때 어떤 작업을 할 것인지 자바스크립트 코드로 작성하는 것

// 1. 인라인 방식
function clickEvent() {
  alert("인라인 방식으로 구현된 함수가 호출 되었습니다!");
}
function focusEvent() {
  let inputBox = document.querySelector("#input_box");
  inputBox.style.background = "orange";
}
function blurEvent() {
  let inputBox = document.querySelector("#input_box");
  inputBox.style.background = "blue";
}

// ⭐️ 2. 이벤트 등록 메소드 방식
// <노드>.addEventListener("이벤트타입", 함수);
let regBtnEl = document.getElementById("reg_btn");
regBtnEl.addEventListener("click", eventFunc); // 콜백함수

function eventFunc() { // 네이밍 함수는 호이스팅이 되기 때문에 뒤에 선언해도 호출 가능
  alert("이벤트 등록 메소드로 구현된 함수를 호출");
}
