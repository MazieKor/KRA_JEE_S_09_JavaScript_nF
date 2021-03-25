const spoon = {
    isExist : true
}
console.log(spoon.isExist);

const fork = spoon;
fork.isExist=false
// console.log(fork.isExist);
console.log(spoon.isExist);