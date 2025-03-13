const fibonacci = function(n) {
    let number = +n;
    if (number < 0) return "OOPS";
    let arr = [0, 1, 1];
    while (arr.length <= number)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
