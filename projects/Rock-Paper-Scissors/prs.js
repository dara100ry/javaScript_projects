const btnStart = document.getElementsByClassName("btn-start")[0];
const gameBoard = document.getElementsByClassName("gameboard")[0];
const gameBtn = document.getElementsByClassName("game-btn");
const winner = document.querySelector("#winner>span");
const playerScore = document.getElementById("player-score-number");
const cpuScore = document.getElementById("computer-score-number");


btnStart.addEventListener("click" , function(){
    this.style.display = "none";
    gameBoard.style.display = "block";
})

function randNum() {
    let x = Math.floor((Math.random() * 3));
    return x;
}

function clear() {
    for (let btn of gameBtn) {
        btn.childNodes[1].classList.add("img");
        if (btn.childNodes[1].classList.contains("active-player")) {
            btn.childNodes[1].classList.remove("active-player");
        }
        if (btn.childNodes[1].classList.contains("active-cpu")) {
            btn.childNodes[1].classList.remove("active-cpu");
        }
        if (btn.childNodes[1].classList.contains("active-draw")) {
            btn.childNodes[1].classList.remove("active-draw");
        }

    }
}

for (let i in gameBtn) {

    gameBtn[i].addEventListener("click", function () {
        clear();
        const selectCpu = randNum();
        if (i != selectCpu) {
            gameBtn[i].childNodes[1].classList.remove("img");
            gameBtn[i].childNodes[1].classList.add("active-player");

            gameBtn[selectCpu].childNodes[1].classList.remove("img");
            gameBtn[selectCpu].childNodes[1].classList.add("active-cpu");
        } else {
            gameBtn[i].childNodes[1].classList.remove("img");
            gameBtn[i].childNodes[1].classList.add("active-draw");
        }


        rules(i, selectCpu);
    })
}

function rules(user, cpu) {
    if (user == cpu) {
        winner.innerText = "draw";
    } else if (user == 0) {
        if (cpu == 1) {
            winner.innerText = "user";
            playerScore.innerText = Number(playerScore.innerText)+1;
        } else {
            winner.innerText = "cpu";
            cpuScore.innerText = Number(cpuScore.innerText)+1;
        }
    } else if (user == 1) {
        if (cpu == 0) {
            winner.innerText = "cpu";
            cpuScore.innerText = Number(cpuScore.innerText)+1;
        } else {
            winner.innerText = "user";
            playerScore.innerText = Number(playerScore.innerText)+1;
        }
    } else if (user == 2) {
        if (cpu == 0) {
            winner.innerText = "user";
            playerScore.innerText = Number(playerScore.innerText)+1;
        } else {
            winner.innerText = "cpu";
            cpuScore.innerText = Number(cpuScore.innerText)+1;
        }
    }
}