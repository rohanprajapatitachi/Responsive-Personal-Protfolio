/* Menu Show Y Hidden */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Menu Show */
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}

/* Menu Hidden */
/*Validate if contact exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}