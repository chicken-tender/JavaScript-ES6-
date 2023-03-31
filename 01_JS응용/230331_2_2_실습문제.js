const green_box = document.querySelector(".item1");
green_box.addEventListener("click", function() {
  const box = document.querySelector(".box");
  box.style.background = "green";
});

const orange_box = document.querySelector(".item2");
orange_box.addEventListener("click", function() {
  const box = document.querySelector(".box");
  box.style.background = "orange";
});

const purple_box = document.querySelector(".item3");
purple_box.addEventListener("click", function() {
  const box = document.querySelector(".box");
  box.style.background = "purple";
});