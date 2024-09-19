let textChange = document.getElementById('text-change');
console.log(textChange); // test textChange

let backgroundChange = document.getElementById('background-change');

function changeText() {
    textChange.innerHTML = 'You just changed the text!';
}

function changeBackground() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'grey';
}

textChange.addEventListener('click', changeText);
backgroundChange.addEventListener('click', changeBackground);