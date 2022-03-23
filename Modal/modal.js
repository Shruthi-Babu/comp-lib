const open = document.getElementById("open");
const close = document.getElementById("close");
const modal_container = document.getElementById("modal_container");

open.addEventListener("click", () => {
  modal_container.classList.add("show_modal");
  console.log("opend");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show_modal");
});
