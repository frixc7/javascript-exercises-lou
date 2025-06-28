const fibonacci = function(n) {
    n = parseInt(n);
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n < 0) {
        return "OOPS";
    } else {
        let x = 1;
        let y = 0;
        let fib;
        for (let i = 1; i < n; i++) {
            fib = x+y;
            y = x;
            x = fib;
        }
        return fib;
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
