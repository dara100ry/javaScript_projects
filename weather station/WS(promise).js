const btnCheck = document.getElementsByClassName("btnCheck")[0];
const input = document.getElementsByClassName("input")[0];
const temperature = document.getElementsByClassName("degree")[0];
const cool = document.getElementsByClassName("cool")[0];
const warm = document.getElementsByClassName("warm")[0];
const pressureDegree = document.getElementsByClassName("pressureDegree")[0];
const API_Key = 'a8cdc345e3f781e69e460f63f7d0175e';

btnCheck.addEventListener("click",function(){
    let city = input.value;
    let myPromise = new Promise((resolve,reject)=>{
        let req = new XMLHttpRequest();
        req.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
        req.onload = function(){
            if(req.status === 200){
                resolve(req.response)
            }else{
                reject(req.response)
            }
            }
            req.send();
    })
    .then(function(value){
        let data = JSON.parse(value);
        temperature.innerHTML = `${(data.main.temp - 273.15).toFixed(1)}°C`;
        cool.innerHTML = `${(data.main.temp_min-273.15).toFixed(1)}°C`;
        cool.style.fontSize = "20px";
        cool.style.marginTop = "38px";
        cool.style.marginLeft = "0px"
        warm.innerHTML = `${(data.main.temp_max-273.15).toFixed(1)}°C`;
        warm.style.fontSize = "20px";
        warm.style.marginTop = "38px";
        warm.style.marginLeft = "0px";
        pressureDegree.innerHTML = `${data.main.pressure}mbar`;
        pressureDegree.style.marginLeft = "80px";
        pressureDegree.style.marginTop = "-65px"
    })
    .catch(function(err){
        console.log(err);
        input.value = '';
        input.placeholder = "city not founded";
        
    })
})


