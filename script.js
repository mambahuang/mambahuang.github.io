function showInfo(info) {
    const infoCard = document.getElementById('info-card');
    const infoContent = document.getElementById('info-content');
    infoContent.textContent = info;
    infoCard.style.display = 'block';
}

document.getElementById('close-card').addEventListener('click', function() {
    document.getElementById('info-card').style.display = 'none';
});

