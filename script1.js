let nube1 = document.getElementById('nube1');
let nube2 = document.getElementById('nube2');
let nube3 = document.getElementById('nube3');
let eleft = document.getElementById('eleft');
let eright = document.getElementById('eright');
let ecenter = document.getElementById('ecenter');
let oncentro = document.getElementById('oncentro');
let onderecha = document.getElementById('onderecha');
let onizquierda = document.getElementById('onizquierda');
let tierra = document.getElementById('tierra');
let bleft = document.getElementById('bleft');
let bright = document.getElementById('bright');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    nube1.style.left = value  + 0.5 + 'px';
    nube2.style.left = value *1 + 'px';
    nube3.style.left = value *1 + 'px';
    bleft.style.left = value *-1.5 + 'px';
    bleft.style.bottom = value *-1 + 'px';
    bright.style.left = value *1.5+ 'px';
    bright.style.bottom = value *-0.5 + 'px';
    tierra.style.bottom = value *-1 + 'px';
    eleft.style.bottom = -100+ value * 0.5 + 'px';
    ecenter.style.bottom =  -100 + value * 1 + 'px';
    eright.style.bottom = -100 + value * 0.8 + 'px';
    oncentro.style.bottom = -1 + value * -5 + 'px';
    onderecha.style.bottom = -10 + value * -5 + 'px';
    onizquierda.style.bottom = -10 + value * -5 + 'px';
    

})

// MODAL

const btnAbrir = document.querySelector('#abrir');
const modal = document.querySelector('#modal');
const cerrar = document.querySelector('#cerrar');

btnAbrir.addEventListener("click", () => {
    modal.showModal();
});

cerrar.addEventListener("click", () => {
    modal.close();
});