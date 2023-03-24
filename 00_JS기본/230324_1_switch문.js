// 코드 효율적으로 돌리기 (switch -> [])
// O(n) -> O(1)
let d = new Date();
let day = d.getDay(); // 요일을 배열로 담아서 index를 return 하나봄.
let dayName = "";

const dayNames = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
]
console.log(dayNames[day]);

switch(day) {
  case 0 :
    dayName = "일요일";
    break;
  case 1 :
    dayName = "월요일";
    break;
  case 2 :
    dayName = "화요일";
    break;
  case 3 :
    dayName = "수요일";
    break;
  case 4 :
    dayName = "목요일";
    break;
  case 5 :
    dayName = "금요일";
    break;
  case 6 :
    dayName = "토요일";
    break;
  default :
    dayName = "";
}
console.log(dayName);
