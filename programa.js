const semicirculos = document.querySelectorAll('.semicirculo');
const timer = document.querySelector('.timer');
var start = document.querySelector('#botao');
var resetar = document.querySelector('#reset');
var pause  = document.querySelector('#pausa')
var audio = new Audio('som.mp3')

function circulo(){
    semicirculos[0].style.background = 'red';
    semicirculos[1].style.backgroundColor = 'red';
    timer.style.color = 'red';
    audio.play();
}
function main(){
    
    timer.style.color = "#088b8b9d"
    
    const hr = document.getElementById('hora1').value;
    const min = document.getElementById('min1').value;
    const seg = document.getElementById('seg1').value;


    const hora = hr * 3600000;
    const minutos = min * 60000;
    const segundos = seg * 1000;
    const setTime = hora + minutos + segundos;
    const starTime = Date.now();
    const futureTime = starTime + setTime;

    const timerLoop = setInterval(countDownTimer);
    countDownTimer();

function countDownTimer() {
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    //contador
    const angle = (remainingTime / setTime) * 360;

    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false});
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false});
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false});

//passar o mostrador
    if(angle > 180) {
        semicirculos[2].style.display = 'none';
        semicirculos[0].style.transform = 'rotate(180deg)';
        semicirculos[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicirculos[2].style.display = 'block';
        semicirculos[0].style.transform = `rotate(${angle}deg)`;
        semicirculos[1].style.transform = `rotate(${angle}deg)`;
    }
//mostrar o timer
    timer.innerHTML = `
    <div>${hrs}</div>
    <div class="colon">:</div>
    <div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    `;
//menos de 5seg
    if (remainingTime <= 6000){
        circulo();
    }

//final
    if(remainingTime < 0 ) {
        clearInterval(timerLoop);
        location.reload(true)
        }
    }

//reset
resetar.addEventListener('click',()=>{ 
    clearInterval(timerLoop);
    timer.innerHTML = "<div>00</div><div class='colon'>:</div><div>00</div><div class='colon'>:</div><div>00</div>"
});

// input tecla espaço
document.addEventListener('keypress', function(e){
    if (e.key ===" "){
        clearInterval(timerLoop);
        timer.innerHTML = "<div>00</div><div class='colon'>:</div><div>00</div><div class='colon'>:</div><div>00</div>"}
});
document.addEventListener('keypress', function(e){
    if (e.key === "p" ){ 
            clearInterval(timerLoop);}
});

pause.addEventListener('click',()=>{ 
        clearInterval(timerLoop);});
}
start.addEventListener('click',()=>{ 
     main();
});
// "i"-start
document.addEventListener('keypress', function(e){
    if (e.key ==="i"){
    main();}
});

