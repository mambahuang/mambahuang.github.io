function showInfo(infoId) {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => box.style.display = 'none');
    document.getElementById(infoId).style.display = 'block';
}
