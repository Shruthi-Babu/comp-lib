const closeButton = document.getElementsByClassName('card-close-btn')[0];
const card = document.getElementsByClassName('card-close')[0];

closeButton.addEventListener('click', close);

function close(){
    card.style.display="none";
}

