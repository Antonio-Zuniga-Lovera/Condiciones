const buttonVerify = document.querySelector('#Verify');
const buy = document.querySelector('#Buy');
const cont = document.querySelector('#Answer');
const imagen1 = document.querySelector('#Imagen1');
const imagen2 = document.querySelector('#Imagen2');
const imagen3 = document.querySelector('#Imagen3');
let activeImage = true;

function agregarQuitarBorde() {

    if(activeImage) {
        imagen1.style.border = '2px solid red';
        imagen2.style.border = '2px solid red';
        imagen3.style.border = '2px solid red';
    } else {
        imagen1.style.border = 'none';
        imagen2.style.border = 'none';
        imagen3.style.border = 'none';
    }

    activeImage = !activeImage;
}

imagen1.addEventListener('click', agregarQuitarBorde);
imagen2.addEventListener('click', agregarQuitarBorde);
imagen3.addEventListener('click', agregarQuitarBorde);
    

buttonVerify.addEventListener('click', () => {
    const input1 = document.querySelector('#Input-number').value;
    const input2 = document.querySelector('#Input-number-2').value;
    const input3 = document.querySelector('#Input-number-3').value;

    const result = Number(input1) + Number(input2) + Number(input3);

    console.log(result);

    cont.innerHTML = `Llevas ${result} stickers`

    if(result > 10) {
        alert('Solo puedes llevar 10 stickers');
        buy.disabled = true;
    } else {
        buy.disabled = false;
    }
});

