// 고객이 구입 가능한 음료 리스트 구하기
let productList = [
  {
    name : "레쓰비",
    price : 700
  },
  {
    name : "박카스",
    price : 1000
  },
  {
    name : "포카리스웨트",
    price : 1700
  },
  {
    name : "티오피",
    price : 850
  },
  {
    name : "삼다수",
    price : 500
  },
  {
    name : "비타500",
    price : 1200
  }
];

let inputCoin = 1000;
let len = productList.length; // 배열의 길이
let outputList = [];
for(let i = 0; i < len; i++) {
  if(productList[i].price <= inputCoin) {
    outputList.push(productList[i]); // 배열의 끝에 새로운 요소를 추가
  }
}
console.log(outputList);