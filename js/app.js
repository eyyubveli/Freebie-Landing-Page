
const mainCardLeft = document.querySelector(".card-left");
const labelAnnu = document.getElementById("annually1");
const labelMonth = document.getElementById("monthly1")
const cardLeft = document.querySelector(".card-left").querySelector("h5");
const cardRight = document.querySelector(".card-right").querySelector("h5");
const cardLeft1 = document.querySelector(".card-left").querySelector("span");
const cardRight1 = document.querySelector(".card-right").querySelector("span");
let openMenu = document.querySelector(".openMenu");
let mainMenu = document.querySelector(".nav-list");
const html = document.querySelector("html");
const faq = document.getElementsByClassName("faq-title");
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 10);
   

})


labelAnnu.addEventListener("click", () => {
    mainCardLeft.style.display = "none";
    // cardLeft1.innerHTML= "/ year";
    cardRight1.innerHTML = "/ year";
    cardRight.innerHTML = "$50  <span> / year <span>";

})

labelMonth.addEventListener("click", () => {
    mainCardLeft.style.display = "block";
    cardLeft1.innerHTML = "/ month";
    cardRight1.innerHTML = "/  month";
    cardRight.innerHTML = "$99  <span> / month <span>";

})
 


    for(let i=0; i<faq.length; i++){
        faq[i].addEventListener("click", ()=>{
            faq[i].classList.toggle("show");
        })
    }



openMenu.addEventListener("click", ()=>{
   mainMenu.classList.toggle("active");
    
  ///openMenu.innerHTML="<i class='fab fa-500px'></i>"
    

})


   
//    window.addEventListener("scroll", ()=>{

//      if(window.scrollY<10){
//         mainMenu.style.top="13%";
//      }

//      else{
//          mainMenu.style.top="9%"
//      }

   
//    })

