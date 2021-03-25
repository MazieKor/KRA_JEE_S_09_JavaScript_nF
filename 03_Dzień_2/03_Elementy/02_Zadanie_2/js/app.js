const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
console.log(children);

const childrenArray = function (elements) {
    const dataArray = [];
    for (let i = 0; i < elements.length; i++) {
        dataArray.push(elements[i].className);   //.push(elements[i].tagName);
    }
    return dataArray;
}

console.log(childrenArray(children));

console.log(ban);
console.log(someBlocks);
console.log(listElements);



// console.log(home);
