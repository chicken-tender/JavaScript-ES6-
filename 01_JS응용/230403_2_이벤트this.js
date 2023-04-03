const pEls = document.querySelectorAll("#p1");
const pEls2 = document.querySelectorAll("#p2");
// for(let el of pEls) {}; 과 pEls.forEach((el) => {});은 같다.
pEls.forEach((el) => {
  el.addEventListener("click", function() {
    if(this.style.color === "red") { // 여기서의 this는 현재 이벤트가 눌려진 요소
      this.style.color = "black";
    } else this.style.color = "red";
  });
});

pEls2.forEach((el) => {
  el.addEventListener("click", () => {
    if(el.style.color === "red") {
      el.style.color = "black";
    } else el.style.color = "red";
  });
});
