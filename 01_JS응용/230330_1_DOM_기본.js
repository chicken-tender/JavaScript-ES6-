// 1. 메소드로 노드를 선택하는 방법
// getElementById("id") : id 속성값과 일치하는 요소 노드 '1개'만 선택
const el = document.getElementById("title");
console.log(el); // <h1 id="title">제목 입니다.</h1>

// getElementByClassName("class") : class 속성값과 일치하는 여러 개의 요소 노드가 선택되며 배열과 유사한 형태로 관리
const classEl = document.getElementsByClassName("text");
console.log(classEl);
/* 0: p.text
   1: p.text
   length: 2 */
console.log(classEl[0]); // <p class="text">본문 내용 입니다.</p>
for(let el of classEl) console.log(el); // 향상된 for문과 유사

// getElementByTagName("태그명") : 태그명과 일치하는 여러 개의 요소 노드가 선택
const tagEl = document.getElementsByTagName("p");
for(let e of tagEl) console.log(e);

// ⭐️ 2. CSS 선택자로 사용하기 : query 메소드(querySelector, querySelectorAll)
// querySelector("선택자") : 1개만
const qEl = document.querySelector(".box-1");
console.log(qEl);

const qEls = document.querySelector(".box-1 .text");
console.log(qEls);

// querySelectorAll("선택자") : 모두 선택 - 자식 노드 선택할 때는 배열로 하는 것을 권장
const qEls2 = document.querySelectorAll(".box-1 .text");
console.log(qEls2);
console.log(qEls2[0]);

//---------------------------------------------------------------------
// 2. 노드 조작하기
// textContent : 요소 노드의 모든 텍스트에 접근
// 🔥 innerText : 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트 접근
// 🔥 innerHTML : 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트 접근
let txtContent = document.getElementById("title2").textContent;
let inText = document.getElementById("title2").innerText;
let inHTML = document.getElementById("title2").innerHTML;
console.log(txtContent); // Hello, JavaScript!!!
console.log(inText); // Hello,
console.log(inHTML); // Hello, <span style="display: none;">JavaScript!!!</span>

document.getElementById("title2").innerHTML = "<h1>Rest</h1>"; // 직접 html 조작 가능

// 3. 스타일 조작하기 : 선택된 노드의 스타일(CSS) 지정하거나 변경
const sEl = document.querySelectorAll(".text");
for(e of sEl) {
  e.style.backgroundColor = "salmon";
  e.style.fontSize = "50px";
  e.style.color = "fff";
  e.style.fontWeight = "bold";
}
