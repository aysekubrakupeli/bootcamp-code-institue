function fizzBuzz(number){
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    }
    if (number % 3 === 0) {
        return "Fizz"
    } 
    if (number % 5 === 0) {
        return "Buzz"
    } else {
        return number
    }
}

// function fizzBuzz(i) {
//     var f = i % 3 == 0, b = i % 5 == 0;
//     return f ? b ? "FizzBuzz": "Fizz": b ? "Buzz": i;
// }

