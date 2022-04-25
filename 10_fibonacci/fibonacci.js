const fibonacci = function(input) {
number = Number(input)
fSequence = [1, 1]
if (0 > number) {
    return "OOPS"
}
else {
    if (number > fSequence.length) {
        for (let i = 1; i < number - 1;i++) {
            fSequence.push((fSequence[i - 1]) + fSequence[i])
            console.log(fSequence)
        }
    }
    return fSequence[(fSequence.length - 1)]
}
};

// Do not edit below this line
module.exports = fibonacci;
