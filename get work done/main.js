const formInputs = document.querySelectorAll(".float .bookingform ");


const register = document.querySelector(".floatbutton");
const formcontainer = document.querySelector(".float");
register.addEventListener("click",()=>{
    formcontainer.classList.toggle("active");
});

const formbook = document.querySelectorAll(".float .bookingform ");
const book = document.querySelector(".bookbutton");
const formcontainer2 = document.querySelector(".bookingform");
book.addEventListener("click",()=>{
    formcontainer2.classList.toggle("active");
});



