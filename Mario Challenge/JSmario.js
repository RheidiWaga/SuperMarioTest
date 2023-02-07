const mario = window.document.getElementById("mario");
const pipe = window.document.getElementById("pipe");
const gameOver = window.document.getElementById('gameOver');
const clickReset = window.document.getElementById('buttonReset') ;
const startGame = window.document.getElementById('startGame');
const grass = document.querySelector('.grass');
const floor1 = document.querySelector('.floor-1');
const floor2 = document.querySelector('.floor-2');
const floor3 = document.querySelector('.floor-3');

const gameOveraudio = new Audio('sounds/die.mp3');
const themeAudio = new Audio("sounds/theme.mp3");



function grassAnimation(){
    grass.classList.add('grass-animation');
        }setInterval(grassAnimation, 8000);


function floorAnimation1(){
    floor1.classList.add('floor-animation-1');
        }setInterval(floorAnimation1, 0);

function floorAnimation2(){
    floor2.classList.add('floor-animation-2');
        }setInterval(floorAnimation2, 0);
                       
function floorAnimation3(){
    floor3.classList.add('floor-animation-3');
        }setInterval(floorAnimation3, 3100); 

const jump = () => {
    mario.classList.add("jump");

    setTimeout(()=>{

        mario.classList.remove("jump");
    }, 700);
}

startGame.addEventListener('click', Start);

function Start(){
    themeAudio.play();
    startGame.style.opacity = '0%';
    const loop = setInterval(()=>{
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
        const grassPosition = grass.offsetLeft;
        const floorPosition1 = floor1.offsetLeft;
        const floorPosition2 = floor2.offsetLeft;
        const floorPosition3 = floor3.offsetLeft;
        

        if(pipePosition <=130 && pipePosition >0 && marioPosition < 130){
            pipe.style.animation = "none"; 
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = "none"; 
            mario.style.bottom = `${marioPosition}px`;
            
            mario.src = 'img/mario-game-over.png';
            mario.style.width ='80px';
            mario.style.marginLeft = '50px';

            gameOver.style.opacity = '100%';
            buttonReset.style.opacity = '100%';

            grass.style.animation = 'none';
            grass.style.left = `${grassPosition}px`;

            floor1.style.animation = 'none';
            floor1.style.left = `${floorPosition1}px`;

            floor2.style.animation = 'none';
            floor2.style.left = `${floorPosition2}px`;

            floor3.style.animation = 'none';
            floor3.style.left = `${floorPosition3}px`;

            themeAudio.pause();
            gameOveraudio.play();
        
        }

    },10)
}


function Reset() {
    window.location.reload();
}

clickReset.addEventListener('click', Reset);

document.addEventListener("keydown", jump); 

