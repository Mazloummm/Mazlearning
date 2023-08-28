const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

btnEl.addEventListener('click', () => {
    const inputValue = inputEl.value;
    listEl.insertAdjacentHTML('beforeend', '<li>${inputValue}</li>');




});