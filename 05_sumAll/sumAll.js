const sumAll = function(num1, num2) {
let sum = num2;
if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
    return "ERROR";
}
while (num1 != num2) {
    sum += num1;
    if (num1 > num2) {
        num1--
    }
    if (num1 < num2) {
        num1++
    }
}
return sum;
}


// Do not edit below this line
module.exports = sumAll;
