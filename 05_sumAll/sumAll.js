const sumAll = function(num1, num2) {
    const isNonNegativeInteger = (num) => {
        if (isNaN(num)) return false;
        if (+num !== num) return false;
        if (Math.round(num) !== num) return false;
        if (num < 0) return false;
        return true;
    };
    if (!isNonNegativeInteger(num1) || !isNonNegativeInteger(num2))
        return "ERROR";

    let sum = 0;
    let min = num1 > num2 ? num2 : num1;
    let max = num1 > num2 ? num1 : num2;
    for (let i = min; i <= max; ++i)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
