const reverseString = function(string) {
    let arr = string.split("");

    let left = 0;
    let right = arr.length - 1;
    let permuted;

    while (left <= right) {
        permuted = arr[left];
        arr[left] = arr[right];
        arr[right] = permuted;

        left += 1;
        right -= 1;
    }

    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
