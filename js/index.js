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
    alert("When you click on the links to cars, you will be redirected to this company's private website.");
    sessionStorage.setItem('alertShown', 'true');
}