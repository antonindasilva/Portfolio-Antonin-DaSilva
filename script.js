//Je recup le header
let header = document.querySelector("header")
//Je recup le hero
let hero = document.querySelector(".bg-hero2")
// j'ecoute le scroll:
window.addEventListener("scroll",function(){
    

    //si l'utilisateur a scrollé plus bas que le hero:
    if(window.scrollY > hero.clientHeight){
        header.classList.add("bg-bleu")
    // je donne au header une classe qui change le bg
    }else{
        header.classList.remove("bg-bleu")

    }
})    


  AOS.init();
