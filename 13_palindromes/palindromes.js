const palindromes = function (str) {
    // parsing
    str = str.replace(/[!?, .]/g, '').toLowerCase();

    // checking
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
