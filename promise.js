// 새로운 Promise를 만들 때, executor 함수가 자동적으로 실행되기 때문에 사용자가 필요할 때에만 통신이 이루어져야 할 때에는 적합하지 않음.
// 즉 불필요한 네트워크 통신을 하게 될 수 있음
const promise = new Promise((resolve, reject) => {
  // 비동기 작업()...(네트워크, 파일 읽기 등)
  console.log("작업중...");
  setTimeout(() => {
    // resolve('kongmi');
    reject(new Error("네트워크가 없습니다."));
  }, 2000);
});

promise
.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => { // 성공 여부 상관없이 무조건.
  console.log('finally!!!');
});

// 연결하기
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num)); // 5


