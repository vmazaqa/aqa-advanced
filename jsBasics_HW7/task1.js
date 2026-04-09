// HOF
function handleNum(integer, evenCallback, oddCallback) {
    if (integer % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}
//Callback functions:
function handleEven() {
    console.log("integer is EVEN")
}
function handleOdd() {
    console.log("integer is ODD")
}
//Function calls:
handleNum(22, handleEven, handleOdd);
handleNum(101, handleEven, handleOdd);