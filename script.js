//Alert
const closeAlertButton = document.querySelectorAll('.alert');
closeAlertButton.forEach(btn => btn.addEventListener('click', close));


function close(e) {
    const alert = e.target.parentElement;
    alert.style.display = 'none';
}


//Modal
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal_container = document.getElementById("modal_container");

openModal.addEventListener("click", () => {
  modal_container.classList.add("show_modal");
});

closeModal.addEventListener("click", () => {
  modal_container.classList.remove("show_modal");
});

//Card
const closeCardButton1 = document.getElementsByClassName('card-close-btn')[0];
const card = document.getElementsByClassName('card-close')[0];

const closeCardButton2 = document.getElementsByClassName('card-close-btn')[1];
const card2 = document.getElementsByClassName('card-close')[1];

closeCardButton1.addEventListener('click', ()=>{card.style.display = 'none';});
closeCardButton2.addEventListener('click', ()=>{card2.style.display = 'none';});

//Toast
const closeToast = document.querySelectorAll(".close-toast");
closeToast.forEach((btn) => btn.addEventListener("click", close));

function close(e) {
  const toast = e.target.parentElement;
  toast.style.display = "none";
}
