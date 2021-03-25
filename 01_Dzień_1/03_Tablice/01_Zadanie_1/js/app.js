const array = [3, 5, 7, 9];
let sum = 0;
let avg = 0;
for (let i = 0; i < array.length ; i++) {
    sum += array[i];
}
avg = sum/array.length;


const distfromAverage = function(arr){
   const newArray = arr.map(function (element){
        return element - avg;
    })
    return newArray;
}

const modifiedTab = array.map(function (element){
    return element - avg;
})

console.log(array);
console.log(avg);
console.log(distfromAverage(array));
console.log(modifiedTab);

