const mainCardLeft = document.querySelector(".card-left");
const labelAnnu = document.getElementById("annually1");
const labelMonth = document.getElementById("monthly1")
const cardLeft = document.querySelector(".card-left").querySelector("h5");
const cardRight = document.querySelector(".card-right").querySelector("h5");
const cardLeft1 = document.querySelector(".card-left").querySelector("span");
const cardRight1 = document.querySelector(".card-right").querySelector("span");
const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".nav-list");
const html = document.querySelector("html");
const faqTitle = document.querySelectorAll(".faq-title");
const faqSub = document.querySelectorAll(".faq-subtitle");
const links = document.querySelectorAll("ul li a");


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

faqTitle.forEach((btn) => {
    btn.addEventListener("click", (e) => {


        faqSub.forEach((sub) => {

            if (e.target.nextElementSibling !== sub && sub.classList.contains("active")) {
                sub.classList.remove("active");

                faqTitle.forEach((btn) => {
                    btn.classList.remove("active")
                })
            }




        })


        const body = btn.nextElementSibling;
        btn.classList.toggle("active")
        body.classList.toggle("active");



    })
})


window.onclick = (e) => {
    if (!e.target.matches(".faq-title, .faq-subtitle,p")) {
        faqTitle.forEach((btn) => {
            btn.classList.remove("active");
        })
        faqSub.forEach((sub) => {
            sub.classList.remove("active")
        })
    }
}


openMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("active");

    ///openMenu.innerHTML="<i class='fab fa-500px'></i>"


})

openMenu.addEventListener('click', () => {


    if (window.scrollY === 0) {
        mainMenu.style.marginTop = '50px'
    }

    window.addEventListener('scroll', () => {

        if (window.scrollY === 0) {
            mainMenu.style.marginTop = '50px'
        } else {
            mainMenu.style.marginTop = '0px'
        }

    })

})