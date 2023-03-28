// 중복 없는 로또 번호 만들기 자바스크립트로 구현하고, html과 css를 이용해 출력하기
function lottoNum() {
  let lotto = [];
  let tmp;

  while(lotto.length < 6) {
    tmp = Math.floor(Math.random() * 45 + 1);
    if(!lotto.includes(tmp)) lotto.push(tmp);
  }
  let items = document.querySelectorAll(".item");
  for(let i = 0; i < items.length; i++) {
    items[i].innerText = lotto[i];
  }
}