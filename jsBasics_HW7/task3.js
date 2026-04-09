function divide(numerator, denominator) {
    if (denominator === 0 ) {
        throw new Error("Error! Division by 0");        
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Error! Parameters must be numbers");
    }
    return numerator / denominator;
}
try {
    console.log(divide(12, 3));
} 
catch (error) {
    console.log(error.message);
} 
finally {
    console.log("Work done!");
}