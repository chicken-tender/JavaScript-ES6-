// 시간 정보(시간, 분)를 입력 받아 45분 빼주는 문제
let hour, min, tmp, calc;
tmp = prompt("시간 입력 : " + "");
hour = Number(tmp);
tmp = prompt("분 입력 : " + "");
min = Number(tmp);
// 시간을 계산하기 위해서 전부 '분'으로 환산
calc = (hour * 60) + min;
if(calc < 45) { // 하루 이전으로 돌아감
  calc = (20 * 60) + min;
}
calc -= 45;
hour = parseInt(calc / 60); // 정수를 나눠 버리면 실수로 변환되기 때문에 parseInt 해줘야함.
min = calc % 60;
document.write("<h2>" + `${hour}시 ${min}분` + "</h2>"); // `${변수}`는 자바의 printf("%d")와 같은 느낌
