const removeFromArray = function(a, ...remove) {
    const array = a;
    const newArray = [];
    for (i in array) {
        if (!remove.includes(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;