const form_Select = document.querySelector(".form-control");
const windowsPic = document.querySelector("[alt='Windows']");
const macPic = document.querySelector("[alt='MacOs']");
const ubuntuPic = document.querySelector("[alt='Ubuntu']");

const option = document.querySelectorAll("option");


form_Select.addEventListener("change", function(){
    if(this.innerText === "Windows"){
        macPic.classList.add("d-none");
        ubuntuPic.classList.add("d-none");

 }

})