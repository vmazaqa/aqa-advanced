const arrayOne = [1, 2, 3, 4, 5];
const arrayMutated = arrayOne.map((value, index) => {
    return value * index;
});
console.log(arrayMutated);