const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
            event.preventDefault();
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor;
        }
    )

}

