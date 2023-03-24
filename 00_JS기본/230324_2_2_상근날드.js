let hamburgerPrice = [];
let beveragePrice = [];
let minHamburgerPrice, minBeveragePrice;

for(let i = 0; i < 3; i++) {
  hamburgerPrice[i] = prompt("햄버거 가격 : " + "");
}
for(let i = 0; i < 2; i++) {
  beveragePrice[i] = prompt("음료 가격 : " + "");
}

minHamburgerPrice = hamburgerPrice[0];
if(hamburgerPrice[0] > hamburgerPrice[1]) {
  if(hamburgerPrice[1] > hamburgerPrice[2]) minHamburgerPrice = hamburgerPrice[2];
  else minHamburgerPrice = hamburgerPrice[1];
}
if(hamburgerPrice[0] > hamburgerPrice[2]) minHamburgerPrice = hamburgerPrice[2];

minBeveragePrice = beveragePrice[0];
if(beveragePrice[0] > beveragePrice[1]) {
  minBeveragePrice = beveragePrice[1];
}

let totalPrice = (Number(minHamburgerPrice) + Number(minBeveragePrice)) - 50;
// document.write(`세트 메뉴 총 가격 : ${totalPrice}원 입니다.`);
document.getElementById("value").innerHTML = (Number(minHamburgerPrice) + Number(minBeveragePrice) - 50) + "원"; // DOM 사용