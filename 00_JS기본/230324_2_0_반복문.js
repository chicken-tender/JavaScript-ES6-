let brands = ["애플", "구글", "마이크로소프트", "페이스북", "아마존", "삼성전자"];

// 기본 for문 (전통 for문)
for(let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}
console.log("\n");

// for of : 배열이나 객체를 순회, 자바의 향상된 for문과 유사함
for(let brand of brands) {
  console.log(brand);
}

// for ~ in : 객체의 프로퍼티를 열거할 때 사용하는 반복문
let person = {
  fname : "John",
  lname : "Doe",
  age : 25 
};

for(let key in person) {
  console.log(person[key]);
}