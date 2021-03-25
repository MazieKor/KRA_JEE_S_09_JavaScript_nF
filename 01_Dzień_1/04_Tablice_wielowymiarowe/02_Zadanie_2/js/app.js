const array2D = [ ["tomek", "ala"], [2, 45, 67], [true] ];

const print2DArray = function(arr2D){
    for (let i = 0; i < arr2D.length; i++) {
        for (let j = 0; j < arr2D[i].length; j++) {
            console.log(arr2D[i][j])
        }
    }
}


print2DArray(array2D);