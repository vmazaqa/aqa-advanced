function checkOrder (available, ordered) {
    if (ordered > available) {
        return "Your order ir too large, we do not have enough goods."
    }
    if (ordered === 0) {
        return "Your order is empty."
    }
    if (ordered < available) {
        return "Your order is accepted."
    }
}
console.log(checkOrder(3, 5)); //too large
console.log(checkOrder(3, 0)); //empty
console.log(checkOrder(10, 5)); // accepted
