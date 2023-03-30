function addStudy() {
  let studyList = document.createElement("ul");
  let study = document.getElementById("study").value;
  console.log(study);
  let NewStudyitem = document.createElement("li");
  NewStudyitem.innerText = study;
  studyList.appendChild(NewStudyitem);

  let studyEl = document.querySelector("#planner");
  studyEl.appendChild(studyList);
}

function deleteMenu() {
  let studyEl = document.querySelector("#planner");
  studyEl.removeChild()
}