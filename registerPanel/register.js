const email = document.getElementById("email");
const pass = document.getElementsByClassName("input")[1];
const againPass = document.getElementsByClassName("input")[2];
const togglePassword = document.getElementById("togglePassword");
const togglePassword2 = document.getElementById("togglePassword2");
const passwordGuide = document.getElementsByClassName("passwordGuide")[0];
const colorLine = document.getElementsByClassName("colorLine")[0];
const passwordDegree = document.getElementsByClassName("passwordDegree")[0];
const btn = document.getElementsByClassName("btn")[0];

let emailPattern = /^([A-Za-z0-9.-_]+\@[A-Za-z0-9]+\.[a-zA-Z]+)$/g

email.addEventListener("keyup",function(){
    let myMail = email.value;
    let check = myMail.match(emailPattern)
    if (check !== null){
        email.style.color = "green"
    }else{
        email.style.color = "red"
    }
});

togglePassword.addEventListener("click",function(){
    if (pass.type === "text"){
        pass.type = "password"  
        togglePassword.removeAttribute("class","bi bi-eye-slash");
        togglePassword.setAttribute("class","bi-eye");
    } else {
        pass.type = "text"
        togglePassword.removeAttribute("class","bi-eye");
        togglePassword.setAttribute("class","bi bi-eye-slash");  
    }
})
togglePassword2.addEventListener("click",function(){
    if (againPass.type === "text"){
        againPass.type = "password"  
        togglePassword2.removeAttribute("class","bi bi-eye-slash");
        togglePassword2.setAttribute("class","bi-eye");
    } else {
        againPass.type = "text"
        togglePassword2.removeAttribute("class","bi-eye");
        togglePassword2.setAttribute("class","bi bi-eye-slash");  
    }
})

pass.addEventListener("keyup",function() {
    passwordGuide.style.display = "block"
    let stringPass = pass.value;
    if(stringPass.length < 6){
        colorLine.style.width = "15%"
        colorLine.style.backgroundColor = "rgb(109, 3, 26)"
        passwordDegree.innerHTML = "too  short!!" 
    }else{
        
        if(stringPass.match(/[^a-zA-Z]/g) == null){
            colorLine.style.width = "30%";
            colorLine.style.backgroundColor = "rgb(219, 20, 20)"
            passwordDegree.innerHTML = "weak!" 
        }else if(stringPass.match(/\d/g) !==null && stringPass.match(/[<>"':;,.}{!@#$%^&*]/g) !==null){
            colorLine.style.width = "100%";
            colorLine.style.backgroundColor = "green"
            passwordDegree.innerHTML = "*perfect*" 
            passwordGuide.style.display = "none";

        }else{
            colorLine.style.width = "55%";
            colorLine.style.backgroundColor = "yellow"
            passwordDegree.innerHTML = "normal (is not perfect!)" 
        }

        }
        if(stringPass == ''){
            passwordGuide.style.display = "none"
            colorLine.style.width = "0%";
            passwordDegree.innerHTML = "" 
        }
 })

againPass.addEventListener("keyup",function(){
    passwordGuide.style.display = "none";
    if(pass.value !== againPass.value){
            passwordDegree.style.display = "block"
            passwordDegree.innerHTML = "passwords not match "; 
            passwordDegree.style.color = "crimson";
            passwordDegree.style.marginTop = '-30px';
            btn.style.opacity = '50%'
        }
        else if((colorLine.style.width !== "30%" && colorLine.style.width !== "15%") && againPass.value == pass.value){
            btn.style.opacity = '100%'
            passwordDegree.style.display = "none"
        }else{
            passwordDegree.style.display = "none"
            
        }
    }

)