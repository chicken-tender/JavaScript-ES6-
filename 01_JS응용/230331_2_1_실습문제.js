// 인라인 방식
// function alertEvent() {
//   alert("클릭");
// }

// 이벤트 등록 메소드 방식
const green_box = document.querySelector(".item1");
green_box.addEventListener("click", function() {
  alert("green!!");
});

const orange_box = document.querySelector(".item2");
orange_box.addEventListener("click", function() {
  alert("orange!!");
});

const purple_box = document.querySelector(".item3");
purple_box.addEventListener("click", function() {
  alert("purple!!");
});