/* 메뉴는 [1] 예매하기, [2] 정산하기
- 사용자로부터 좌석번호(index)를 입력받아 예매하는 시스템이다. (좌석은 10개이다.)
- [V] [V] [V] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
- 이미 예매가 완료된 좌석은 재구매 할 수 없다.
- 한 좌석당 예매 가격은 12000원
- 정산하기 클릭시 해당 영화관의 총 매출액 출력 */

const reserveEl = document.querySelector("#reserve");
reserveEl.addEventListener("click", function() {
  const seatEl = document.querySelector("#seat");
  if(seatEl.style.display == 'none') {
    seatEl.style.display = 'block';
  } else seatEl.style.display = 'none';
});

const seat = document.querySelectorAll(".seat-item");

const reserveBtn = document.querySelector("#reserveBtn");
reserveBtn.addEventListener("click", function() {
  const seatNum = document.getElementById("seatNum").value;
  for(let e of seat) {
    let tmp = e.className.substring(10);
    if(tmp == seatNum) {
      if(e.style.backgroundColor == "royalblue") alert("이미 예매가 완료된 좌석 입니다.");
      e.style.backgroundColor = "royalblue";
      alert("예매가 완료되었습니다.");
      const inputBox = document.querySelector("#seatNum");
      inputBox.value = "";
      document.getElementById("seatNum").focus();
    }
  }
});

const quitEl = document.querySelector("#quit");
quitEl.addEventListener("click", function() {
  let cnt = 0;
seat.forEach((e) => {
  if(e.style.backgroundColor == "royalblue") {
    cnt++;
  }
});
document.getElementById("result").innerHTML = "총 매출 : " + cnt * 12000 + "원";
});