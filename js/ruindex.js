alert ("Когда вы переходите по ссылкам на автомобили, вы переходите на частный сайт этой компании.")

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});