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
        navMenu.classList.remove("show-menu");
    })
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll("nav__link");

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class //
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener('click', linkAction))