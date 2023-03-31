function newRegister() {
  // ul태그 아래에 추가할 요소 노드 생성
  let newItem = document.createElement("li");
  // 사용자가 input에 입력한 값 담기
  let subject = document.querySelector("#subject");
  // html 문서에 새로운 텍스트 노드를 만듬.
  let newText = document.createTextNode(subject.value);
  // 텍스트 노드를 요소 노드의 자식 노드로 추가
  newItem.appendChild(newText);

  let itemList = document.querySelector("#itemList");

  // insertBefore() 메소드는 DOM 요소를 특정 요소 이전에 삽입합니다.
  // 자식 노드 중 첫번째 노드 앞에 추가
  itemList.insertBefore(newItem, itemList.childNodes[0]);

  // 입력하면 칸 비워줌
  subject.value = "";
  // 버튼 누른 뒤 input(#subject)에 자동으로 포커스 가도록..
  document.getElementById("subject").focus();

  let items = document.querySelectorAll("li");
  for(let e of items) {
    e.addEventListener("click", function() {
      // 여기서의 this는 클릭한 요소 그 자체
      if(this.parentNode) { // 클릭 이벤트가 발생한 요소의 부모가 있으면 ..
        this.parentNode.removeChild(this);
      }
    });
  }
}