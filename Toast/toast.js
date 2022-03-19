const closebtn = document.querySelectorAll(".close-toast");
closebtn.forEach((btn) => btn.addEventListener("click", close));

function close(e) {
  const toast = e.target.parentElement;
  toast.style.display = "none";
}
