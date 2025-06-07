const sumAll = function(a, b) {
    const NOT_NEGATIVE = a >= 0 && b >= 0;
    const IS_NUMBER = typeof(a) == "number" && typeof(b) == "number";
    const IS_INTEGER = a % 1 == 0 && b % 1 == 0;


    if (NOT_NEGATIVE && IS_NUMBER && IS_INTEGER) {
        const min = a < b ? a : b;
        const max = a > b ? a : b;

        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
