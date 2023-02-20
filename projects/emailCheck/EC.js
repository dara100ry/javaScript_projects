const myInput = document.getElementsByTagName("input")[0];
const submit = document.getElementsByTagName("button")[0];

let emailPattern = /^([A-Za-z0-9.-_]+\@[A-Za-z0-9]+\.[a-zA-Z]+)$/g

myInput.addEventListener("keyup",function(){
    let myMail = myInput.value;
    let check = myMail.match(emailPattern)
    if (check !== null){
        myInput.style.backgroundColor = "green";
        myInput.style.color = "#fff"
    }else{
        myInput.style.backgroundColor = "red";
        myInput.style.color = "#fff"
    }
});

submit.addEventListener("click",function(){
    let myMail = myInput.value;
    alert(myMail.match(emailPattern))
})