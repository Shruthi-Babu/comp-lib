//Alert
const closeButton = document.querySelectorAll('.alert');
closeButton.forEach(btn => btn.addEventListener('click', close));


function close(e) {
    const alert = e.target.parentElement;
    alert.style.display = 'none';
}