const myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.toggle();

const headerBlock = document.querySelector('.container__header');
const redBlock = document.querySelector('.container__main_clr-red');

hideBlockButton.addEventListener('click', () => {
    headerBlock.classList.toggle('d-none');
});

changeBlocksButton.addEventListener('click', () => {
    redBlock.classList.toggle('order-first');
});