const wordsArray = ["hello", "world", "python", "glad", "yourself", "there", "are", "also", "words", "you", "already", "know", "for", "instance", "the", "latest", "update", "of", "the", "oxford", "english", "dictionary", "added", "new", "english", "like", "banana", "bread"];
const words = document.getElementById("words");
const timerNum = document.querySelector("#timer>span");
const input = document.getElementById("test-input");
const everyWord = document.getElementsByClassName('words');
const wordMin = document.getElementById("record-word");
const charMin = document.getElementById("record-characters");

window.onload = function() {
    for(let txt of wordsArray){
        let word = document.createElement("div");
        word.setAttribute("class","words");
        word.innerText = txt;
        words.appendChild(word);
        
    }
}

input.onkeydown = function(e) {
    if (e.keyCode == 8 || e.keyCode == 32){
        e.preventDefault (); 
    }
}


input.onkeyup = function(e){
    time();
    let charType = e.key;
    let firstChar = everyWord[0].innerHTML[0];
    if( charType == firstChar){
        everyWord[0].innerHTML = everyWord[0].innerHTML.substring(1);
        charMin.innerHTML = Number(charMin.innerHTML)+1;        
        input.style.color = 'green';

        if(everyWord[0].innerHTML == ''){
            everyWord[0].remove();
            input.value += " "
            wordMin.innerHTML = Number(wordMin.innerHTML) + 1;
        }
        ;
    }else{
        if (e.keyCode !== 8 && e.keyCode !== 32){
            input.style.color = 'red'; 
        }
    }
    }

    
function time() {
    let newTime = Number(timerNum.innerHTML);
   let timerInterval = setInterval(() => {
        newTime = newTime -1;
        timerNum.innerHTML = newTime;
        if(newTime == 0){
            clearInterval(timerInterval);
            let timerBox = document.getElementById("timer");
            timerBox.style.backgroundColor = 'red';
            timerBox.style.color = 'white';
            input.disabled = true;
        }
    }, 1000);
}
