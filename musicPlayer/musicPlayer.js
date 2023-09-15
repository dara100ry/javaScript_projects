const music = document.getElementById("audio-scource");
const playBtn = document.getElementById("btn-play");
const backwardBtn =document.getElementById("btn-back");
const forwardBtn = document.getElementById("btn-for");
const stopBtn = document.getElementById("media-stop");
const replayBtn = document.querySelector("#media-repeat>img");
const timeTotalMinutes = document.getElementById("media-time-total-minutes");
const timeTotalSeconds = document.getElementById("media-time-total-seconds");
const mediaProgress = document.getElementById("media-progress");
const timePastMinutes = document.getElementById("media-time-past-minutes");
const timePastSeconds = document.getElementById("media-time-past-seconds");
const mediaProgressContainer = document.getElementById("media-progress-container");
const musicSelect = document.getElementById("music-select");
const musicSelectImage = document.getElementById("music-select-image");
const musicSelectTitle = document.getElementById("music-select-name");
const body = document.querySelector("body");

const jsmediatags = window.jsmediatags;

let replayFlag = false;

setInterval(() => {
    progressWidth((music.currentTime/music.duration)*100)
    if((Math.round(music.currentTime)/60)<10){
       timePastMinutes.innerHTML = `0${Math.floor(Math.round(music.currentTime)/60)}`;
    }else{
        timePastMinutes.innerHTML = Math.floor(Math.round(music.currentTime)/60);
    }
    if((Math.round(music.currentTime)%60)<10){
      timePastSeconds.innerHTML = `0${Math.round(music.currentTime)%60}`;
    }else{
        timePastSeconds.innerHTML = Math.round(music.currentTime)%60;
    }
    if(music.ended){
        music.load();
        playBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/17/play--v1.png");
    }   
}, 50);

function progressWidth(w){
    mediaProgress.style.width =`${w}%`;
}


function musicTime(){
    let res = Math.round(music.duration);
    if(Math.floor(res/60)<10){
        timeTotalMinutes.innerText = `0${Math.floor(res/60)}`;
    }else{
        timeTotalMinutes.innerText = Math.floor(res/60);
    }
    if((res%60)<10){
        timeTotalSeconds.innerText = `0${res%60}`;
    }else{
        timeTotalSeconds.innerText = res%60;
    }
}

playBtn.addEventListener("click", function () {
    if(music.paused){
        music.play();
        playBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/17/pause--v1.png");

    }else{
        music.pause();
        playBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/17/play--v1.png");
    }
})

backwardBtn.addEventListener("click",function(){
    music.currentTime = music.currentTime - 10;
})

forwardBtn.addEventListener("click",function(){
    music.currentTime = music.currentTime + 10;
})

stopBtn.addEventListener("click",function(){
    music.load();
    playBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/17/play--v1.png");
})

replayBtn.addEventListener("click",function(){
    if(replayFlag == false){
        this.style.backgroundColor = "#fff";
        replayFlag = true;
        music.loop = true;
    }else{
        this.style.backgroundColor = "";
        replayFlag = false;
        music.loop = false;
    }
})  

mediaProgressContainer.addEventListener("click",function(e){
    let clickPosition =  e.clientX;
    let distanceFromLeft = this.getBoundingClientRect().left;
    let clickPositionContainer = clickPosition - distanceFromLeft;
    let progressContainerWidth = this.offsetWidth;
    let progressClick = clickPositionContainer / progressContainerWidth;
    progressWidth((progressClick)*100);
    music.currentTime = (progressClick * music.duration)
})

musicSelectImage.addEventListener("click",function(){
    musicSelect.click();
})

musicSelect.addEventListener("change",function(){
    music.load();
    let file = this.files[0];
    //
    jsmediatags.read(file, {
        onSuccess : function(tag){
            const data = tag.tags.picture.data;
            const format = tag.tags.picture.format;

            let base64string = "";
            for(let i=0; i< data.length ; i++){
                base64string += String.fromCharCode(data[i]);
            }
            body.style.backgroundImage = `url(data:${format};base64,${window.btoa(base64string)})`
            musicSelectImage.setAttribute("src",`data:${format};base64,${window.btoa(base64string)}`);
            musicSelectTitle.innerText = tag.tags.title;


        },
        onError:function(error){
            console.log(error);
        }
    })
    //
    let URL = window.URL || window.webkitURL;
    let fileURL = URL.createObjectURL(file);
    music.setAttribute("src",fileURL);
    setTimeout(() => {
        musicTime();
    }, 50);
    music.play();
    playBtn.setAttribute("src","https://img.icons8.com/ios-glyphs/17/pause--v1.png");
    musicSelectImage.setAttribute("src",fileURL)
})
