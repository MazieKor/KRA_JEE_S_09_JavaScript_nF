const btnToDelete = document.querySelector(".btn");

btnToDelete.addEventListener("click", function(e) {
   this.parentElement.removeChild(this);
});