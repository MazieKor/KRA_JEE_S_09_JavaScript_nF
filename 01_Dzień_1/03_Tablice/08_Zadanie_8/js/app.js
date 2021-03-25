const arr = [2, 4, 6, 8];
console.log(arr);
// const arrayChanged = arr.forEach(function(element){
//     element = element +10;
//     return element;
// });

arr[0] += 20;     //przy tablicy const mogę zmienić dany element
arr[1] += 20;

console.log(arr);
// console.log(arrayChanged);