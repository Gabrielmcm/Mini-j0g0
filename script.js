const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

 const canoPosition = cano.offsetLeft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

 if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {  

    cano.style.animation = 'none';    
    cano.style.left = `${canoPosition}px`;

    mario.style.animation = 'none';    
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './Images/game-over.jpg';
    mario.style.width = '115px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

 }


}, 10);

document.addEventListener('keydown', jump);