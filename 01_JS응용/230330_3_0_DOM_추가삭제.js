// 노드 추가하기 : 새로운 요소를 화면에 추가하려면 새로운 노드를 생성하고, 기존의 DOM 트리 노드와 연결

// createElement() : 요소 노드 생성
const aEl = document.createElement("div");
// <기준노드>.appendChild(추가할 자식 노드);
document.body.appendChild(aEl);
aEl.innerText = "Test";

// 삭제는 '투두리스트' 예제 하면서 다룰 예정..
