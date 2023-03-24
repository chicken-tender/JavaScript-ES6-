let treeHit = 0;
// while(treeHit < 10) {
//   treeHit++;
//   document.write(`<p>나무를 ${treeHit}번 찍었습니다.</p>`);
//   if(treeHit == 10) document.write(`<p>나무가 넘어 갑니다.</p>`);
// }

while(true) {
  treeHit++;
  document.write(`<p>나무를 ${treeHit}번 찍었습니다.</p>`);
  if(treeHit == 10) {
    document.write(`<p>나무가 넘어 갑니다.</p>`);
    break;
  }
}