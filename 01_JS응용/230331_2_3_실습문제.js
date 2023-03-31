const detailBtn = document.querySelector("#detail");
detailBtn.addEventListener("click", function() {
  const desc = document.querySelector(".desc");
  console.log(desc);
  if(desc.style.display == 'none') {
    desc.style.display = 'block';
  } else desc.style.display = 'none';
});