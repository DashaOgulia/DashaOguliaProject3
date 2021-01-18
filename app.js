


let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    
    if(mobileMenu.classList.contains('active-menu')){
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})

let isMenuVisible = false;
let menu = document.querySelector(".menu-app");

menu.addEventListener("click", function(){
    isMenuVisible = !isMenuVisible;

    if(isMenuVisible){
        mainMenu.classList.add("transform-menu")
    }else{
        mainMenu.classList.remove("transform-menu")
    }
})

