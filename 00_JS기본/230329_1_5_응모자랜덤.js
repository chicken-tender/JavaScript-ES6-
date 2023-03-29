// 응모자 수를 입력 받아 당첨자를 발표 하는 프로그램 작성
// 응모자 수 : input 입력
// 당첨자 발표 : 응모자 수 사이에서 당첨자를 선택(랜덤)해 발표

function random() {
  const num = Number(document.getElementById("num").value);
  let ran = parseInt((Math.random() * num) + 1);
  document.getElementById("rst").innerHTML = `${ran}번 당첨!`;
}