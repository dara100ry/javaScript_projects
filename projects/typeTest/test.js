const wordsArray = ["hello", "world", "python", "glad", "yourself", "there", "are", "also", "words", "you", "already", "know", "for", "instance", "the", "latest", "update", "of", "the", "oxford", "english", "dictionary", "added", "new", "english", "like", "banana", "bread"];
const words = document.getElementById("words");
const timerNum = document.querySelector("#timer>span");
const input = document.getElementById("test-input");


window.onload = function() {
    for(let txt of wordsArray){
        let word = document.createElement("div");
        word.setAttribute("class","words");
        word.innerText = txt;
        words.appendChild(word);
    }
}

input.onkeyup = function(e){
    time();
    if(e.keycod ==)
}


function time() {
    let newTime = Number(timerNum.innerHTML);
   let timerInterval = setInterval(() => {
        newTime = newTime -1;
        timerNum.innerHTML = newTime;
        if(newTime == 0){
            clearInterval(timerInterval);
            input.disabled = true;
        }
    }, 1000);
}
