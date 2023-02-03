
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.toggle();

const headerBlock = document.querySelector('.container__header');
const blueBlock = document.querySelector('.container__main_clr-blue');
const redBlock = document.querySelector('.container__main_clr-red');
const hideBlockButton = document.querySelector('.btn-warning');
const changeBlocksButton = document.querySelector('.btn-success');

const hideBlock = () => {
    headerBlock.style.display = 'none'
}
const showBlock = () => {
    headerBlock.style.display = 'block'
}

const changeVisibilityBlock = () => {
    if (headerBlock.style.display == 'none') {
        showBlock();
    } else {
        hideBlock();
    }
}

hideBlockButton.addEventListener('click', changeVisibilityBlock);

const moveRedBlock = () => {
    redBlock.style.order = '-1'
    blueBlock.style.order = '1'
}
const backRedBlock = () => {
    redBlock.style.order = '1'
    blueBlock.style.order = '-1'
}
const changeBlocks = () => {
    if (redBlock.style.order == '-1' && blueBlock.style.order == '1') {
        backRedBlock();
    } else {
        moveRedBlock();
    }
}
 
changeBlocksButton.addEventListener('click', changeBlocks);