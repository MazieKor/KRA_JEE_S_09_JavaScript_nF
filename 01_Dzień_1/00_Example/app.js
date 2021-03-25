let sum = "Aloha";
console.log(sum);
sum = "tom";
console.log(sum);

const text = [4, 6];
console.log(text);
text.push = [4, 6, 7];
console.log(text);

let array = [7, 9];
console.log(array);
array = [14, 19, 22];
console.log("array no 4: " + array);

const exampleFun = function (){
    console.log("say hello");     //nie odpali się
}

function exampleFun2(){              //nie odpali się - definicja
    console.log("2.Example");
}
const toSet = setTimeout(exampleFun, 4000);
// clearTimeout(toSet);

//exampleFun2();     //odpali się

// setInterval(exampleFun2, 2000);

setInterval(function () {
    console.log("funkcja setIn");}, 2000);