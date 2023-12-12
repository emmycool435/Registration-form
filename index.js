let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let title = document.getElementById("title");
let namefield = document.getElementById("namefield");

/* adding click funtion event listener*/
signinBtn.onclick = fuction(){
    /* Hiding the name field on click*/
    namefield.style.maxHeight = "0"
}