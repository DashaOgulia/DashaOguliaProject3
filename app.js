

//menu mobile
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

//tabs

let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-content");
let tabWrap = document.querySelector(".tab-title-items");

function showTabsContent(i=0){
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("active");
}


function hideTabsContent(){
    tabContent.forEach(tab=>{
        tab.classList.add("hide");
        tab.classList.remove("show");
    })
    tabItems.forEach(item =>{
        item.classList.remove("active");
    })
}
hideTabsContent()
showTabsContent()

tabWrap.addEventListener("click", function(e){
    let target = e.target;
    if(target.classList.contains("tab-title-item")){
        tabItems.forEach((item,i)=>{
            if(target == item){
                hideTabsContent()
                showTabsContent(i)
            }
        })
    }
})



//slider-slick
$(".slider-block").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
     
  });
