function isAdult(age) {
    return age >= 18;
}
let person1 = 25;
let person2 = 15;
console.log(`Is age ${person1} adult?`, isAdult(person1)); // true
console.log(`Is age ${person2} adult?`, isAdult(person2)); // false