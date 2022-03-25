const closeToast = document.querySelectorAll(".close-toast");
closeToast.forEach((btn) => btn.addEventListener("click", close));

function close(e) {
  const toast = e.target.parentElement;
  toast.style.display = "none";
}
