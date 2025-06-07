const repeatString = function(string, num) {
    if (num > 0) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(string);
        }
        return arr.join("");
    } else if (num == 0) {
        return "";
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
