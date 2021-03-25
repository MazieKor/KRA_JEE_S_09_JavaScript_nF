const getEvenAverage = function (arr){
    const filteredElements = arr.filter(function (element){
        return element % 2 === 0;
    } );

    const average = filteredElements.reduce(function (total, element){
        return (total + element);
    },0 );

    return average/filteredElements.length ;
}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));
