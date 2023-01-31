const words = document.getElementById("words");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphba = alphabet.split('');
const guessBox = document.getElementsByClassName("guess")[0];
const guesses = ['javascript','python','test'];
const boxes = document.getElementsByClassName("box");
const endGame = document.getElementsByClassName("end-game")[0];
const hangMan = document.getElementsByClassName("hangman")[0];
const btnYes = document.getElementsByClassName("btn-yes")[0];
const btnNo = document.getElementsByClassName("btn-no")[0];
let chance = 7;
let guessWord ="";

function prepareGame(){
    let random = Math.floor(Math.random()*(guesses.length))
    let word = guesses[random];
    for(char in word){
        guessWord += "-";
    }
    guessBox.innerText = guessWord;
    for(char of alphba){
        let box = document.createElement("div");
        box.innerText = char;
        box.setAttribute("class" , "box hover");
        words.appendChild(box);
    }
    boxClicked(word);
}
prepareGame();

function boxClicked(word){
    for(let box of boxes){
        box.addEventListener("click" , function(){
            if(word.includes(box.innerText)){
                box.classList.add("currect-select");
                box.classList.remove("hover");
                for(let i in word){
                    if(word[i] == box.innerText){
                        guessWord = replaceAt(i,word[i]);
                    }
                }
                guessBox.innerText = guessWord;
                if (word == guessWord){
                    GameOver();
                }
            }else{
                box.classList.add("incorrect");
                box.classList.remove("hover");
                let lvl = document.createElement("div");
                chance -= 1;
                lvl.setAttribute("class" , `hangman-lvl${(7 - chance)}`);
                hangMan.appendChild(lvl);
                if (chance == 0) {
                    GameOver();
                }
            }
        })
    }
}
function replaceAt(index,char){
    let part1 =guessWord.slice(0,index);
    let part2 = guessWord.slice(index,guessWord.length);
    part2 = part2.replace(part2[0],char);
    return part1+part2;
}

function GameOver(){
    endGame.style.display = "block";
    btnYes.addEventListener("click",function(){
        endGame.style.display = "none";
        guessBox.innerText = '';
        chance = 7;
        guessWord ="";
        words.innerText= '';
        hangMan.innerText = '';
        prepareGame();
    })
}