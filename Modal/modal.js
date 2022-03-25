const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal_container = document.getElementById("modal_container");

openModal.addEventListener("click", () => {
  modal_container.classList.add("show_modal");
});

closeModal.addEventListener("click", () => {
  modal_container.classList.remove("show_modal");
});
