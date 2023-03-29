const btn = document.getElementById("container");
const scoreBoard = document.getElementById("scoreBoard");
const timmer = document.getElementById("timmer");
const secondTimmer = document.getElementById("seconds");
const millisecondTimer = document.getElementById("milliseconds");
const record = document.getElementById("record");
const reset = document.getElementById("reset");
 

let counter = 0;
let countTime = 0;
btn.onclick = function(){
    if(countTime == 0){
        time();
        clickTest();
    }else if(countTime<500){
        clickTest();
}
function clickTest(){
    counter++;
    scoreBoard.childNodes[1].innerText = counter;
}
function time(){
    timmer.style.display = 'block'
    
    let milliseconds = 0;
    let time = setInterval(() => {
        countTime ++;
        secondTimmer.innerText = Math.floor(countTime/100);
        milliseconds += 10;
        millisecondTimer.innerText = milliseconds % 1000;
        if(countTime>500){
            clearInterval(time);
            millisecondTimer.innerText = "000";
            btn.style.display = "none";
            timmer.style.display = "none";
            record.childNodes[1].innerText = counter/5;
            record.style.display = "block";
            reset.style.display = "block";
        }
    }, 10);
}
}

reset.onclick =function(){
    counter = 0;
    countTime = 0;
    btn.style.display = "block";
    record.style.display = "none";
    reset.style.display = "none";
    scoreBoard.childNodes[1].innerText = 0;
}