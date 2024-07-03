let opnBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

opnBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if(event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});