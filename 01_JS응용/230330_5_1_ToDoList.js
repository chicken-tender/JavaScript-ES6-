function addStudy() {
  let ul = document.createElement("ul");
  let study = document.getElementById("study").value;
  let li = document.createElement("li");
  li.innerText = study;
  li.onclick = function() {
    li.classList.toggle("completed");
  }
  ul.appendChild(li);

  let studyEl = document.querySelector("#planner");
  studyEl.appendChild(ul);
}