const reverseString = function(string) {
backString = ""
for (let i = (string.length - 1); i > -1; i--){
    backString += string[i]
}
return backString
};

// Do not edit below this line
module.exports = reverseString;
