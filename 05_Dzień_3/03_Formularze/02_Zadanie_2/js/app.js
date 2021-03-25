const idElement = document.getElementById("invoice");
const invoiceBlock = document.getElementById("invoiceData");


idElement.addEventListener("change", function(){
    if(invoiceBlock.indexOf("d-none") === -1)
        invoiceBlock.classList.add('d-none');
    else
        invoiceBlock.classList.remove('d-none');
})