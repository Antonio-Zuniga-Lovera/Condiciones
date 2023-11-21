const authenticator = document.querySelector('#Authenticator');
const selects = document.querySelector('#Container-select');
const resultP = document.querySelector('#Result');
const form = document.querySelector('form');
const body = document.querySelector('body');

form.addEventListener('submit', async (e) => {
    const select1 = document.querySelector('#Select1').value;
    const select2 = document.querySelector('#Select2').value;
    const select3 = document.querySelector('#Select3').value;
    

    e.preventDefault();

    const result = select1 + select2 + select3;

    console.log(result);


    if (result == 911) {
        resultP.innerHTML = 'password 1 correcto';
        body.style.cursor = 'wait';
        setTimeout(() => {
            window.location.href = 'compra.html';
        }, 3000);
    } else if (result == 714) {
        resultP.innerHTML = 'password 2 es correcto';
        setTimeout(() => {
            window.location.href = 'compra.html';
        }, 3000);
    } else {
        resultP.innerHTML = 'password incorrecto';
    }
});