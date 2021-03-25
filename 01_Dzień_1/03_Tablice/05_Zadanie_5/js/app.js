const multiplyResult = function (arr) {
    const resultReduce = arr.reduce(function (a, b) {
        return a*b;
    } );
    return resultReduce;
}

console.log(multiplyResult([4, 5, 2, 3]));
