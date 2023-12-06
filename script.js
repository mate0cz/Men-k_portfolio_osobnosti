function openPopup(text) {
    let popup = document.getElementById('popup');
    let popupText = document.getElementById('popupText');


    popupText.textContent = text;
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}