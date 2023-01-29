import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Tooltip, Toast, Popover } from 'bootstrap';

const headerBlock = document.querySelector('.container__header');
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