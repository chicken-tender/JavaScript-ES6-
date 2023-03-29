// Map 객체 : 자바스크립트에서 제공하는 데이터 구조 중 하나로 key-value 쌍으로 데이터르 저장 관리 합니다.
// Map은 객체와 유사하지만 객체와는 다르게 키에 다양한 자료형을 사용 할 수 있습니다.

let map = new Map();
// set(key, value)
// 원래는 정보를 받아와서 Map으로 뿌리지만, 지금은 받아올 정보가 없기 때문에 set을 사용하여 가져오겠습니다.
map.set("name", "유나");
map.set("email", "yuna@naver.com");
map.set("addr", "서울시 강남구");

console.log(map.size);
console.log(map.get("name"));
console.log(map.get("email"));

map.forEach((item) => {
  console.log(item);
});