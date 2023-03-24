// 구구단
let i, j;

for(let i = 2; i < 10; i++) {
  document.write("<table>");
  document.write("<tr><th>" + i + "단 </th></tr>");
  for(let j = 1; j < 10; j++) {
    document.write("<tr><td>" + i + "X" + j + "=" + i*j + "</td></tr>");
  }
  document.write("</table>");
}