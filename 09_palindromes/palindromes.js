const palindromes = function (string) {
formString = String(string);
formString = formString.toLowerCase();
formString = formString.replace(/[^a-z]/g, "");
backwardsString = reverse(formString);
if (backwardsString == formString) {
    return true;
}
else {
    return false;
}
};

function reverse(str) {
let backString = ""
    for (let i = (str.length - 1); i > -1; i--) {
        backString += str.charAt(i)
    }
    return backString;
}

// Do not edit below this line
module.exports = palindromes;
