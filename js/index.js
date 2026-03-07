alert ("When you click on the links to cars, you will be redirected to this company's private website.")

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});