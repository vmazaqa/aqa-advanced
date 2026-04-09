function decrease(num) {
    console.log(num);
    if (num <= 0) {
        return;
    }
    decrease(num - 1);
}
decrease(10)