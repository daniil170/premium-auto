if (!sessionStorage.getItem('modalShown')) {
    document.getElementById('modalOverlay').style.display = 'flex';
    sessionStorage.setItem('modalShown', 'true');
} else {
    document.getElementById('modalOverlay').style.display = 'none';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

if (!sessionStorage.getItem('alertShown')) {
    alert("Когда вы переходите по ссылкам на автомобили, вы переходите на частный сайт этой компании.");
    sessionStorage.setItem('alertShown', 'true');
}