let age, birthYear, gender, jumin;

while(true) {
  jumin = prompt("주민번호를 입력하세요. : " + "");
  if(jumin.length != 14 || jumin.indexOf("-") == -1) {
    alert("다시 입력하세요.");
  } else break;
}

// 성별
if(jumin.charAt(7) == "1" || jumin.charAt(7) == "3") {
  gender = "남성";
} else gender = "여성";

// 나이
if(jumin.charAt(7) == "1" || jumin.charAt(7) == "2") {
  birthYear = "19" + jumin.substring(0,2);
} else birthYear = "20" + jumin.substring(0,2);

let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
let birth = String(month) + String(date);
if(today.getMonth() < 10) birth = "0" + birth;
if(today.getDate() < 10) birth = birth + "0";

if(birth < jumin.substring(2,6)) age = (today.getFullYear() - Number(birthYear)) - 1;
else age = today.getFullYear() - Number(birthYear);

document.write(`<h3> 현재 당신의 나이는 ${age}살 이고, 성별은 ${gender} 입니다. </h3>`);