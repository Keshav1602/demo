
// const display = ()=>{
//     const p = document.querySelector("#djf");
//     p.innerHTML += " LOL";
// }
// const my = setInterval(display,1000);

var uname ="admin";
var password ="admin";

function authenticateUser(){
    n = document.querySelectorAll("input");
    if(n[0].value == uname && n[1].value == password){
        n[2].value = "logged in";
        n[2].style.color = 'green';
        document.querySelector("body").style.backgroundColor='green';
    }
    else{
        n[2].value = "not logged in";
        n[2].style.color = 'red';
        
        document.querySelector("body").style.backgroundColor='red';
    }
}