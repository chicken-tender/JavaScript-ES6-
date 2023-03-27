// 실습예제 : 함수와 switch 문 사용하여 계산기 만들기
function calculator() {
  // prompt, input에서 받아오는 값은 문자열로 받아지기 때문에 형변환 해야함.
  const firstNum = Number(document.getElementById("num1").value);
  const secondNum = Number(document.getElementById("num2").value);
  const op = document.getElementById("operator").value;

  let result;
  switch(op) {
    case "+" : 
      result = add(firstNum,secondNum);
      break;
    case "-" :
      result = sub(firstNum,secondNum);
      break;
    case "*" :
      result = mul(firstNum,secondNum);
      break;
    case "/" :
      result = div(firstNum,secondNum);
      break; 
  }
  document.getElementById("rst").innerHTML = `${result}`;
}
function add(a,b) {
  return a+b;
}
function sub(a,b) {
  return a-b;
}
function mul(a,b) {
  return a*b;
}
function div(a,b) {
  return a/b;
}