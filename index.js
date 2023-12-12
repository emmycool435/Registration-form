let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let title = document.getElementById("title");
let namefield = document.getElementById("namefield");

/* adding click funtion event listener*/
signinBtn.onclick = function(){
    /* Hiding the name field on click*/
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign in"; /*changing the titlte on click*/
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    /* Hiding the name field on click*/
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign up"; /*changing the titlte on click*/
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}