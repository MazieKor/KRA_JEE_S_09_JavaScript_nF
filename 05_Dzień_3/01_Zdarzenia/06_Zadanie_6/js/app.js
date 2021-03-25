const divList = document.querySelectorAll("div.box");

divList.forEach(function(event) {

    event.addEventListener("click", function (e) {
        e.preventDefault();
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor
    });

    }
)