const repeatString = function(str, count) {
    if (count < 0) return "ERROR";
    let repeated_str = "";
    for (let i = 1; i <= count; ++i)
        repeated_str += str;
    return repeated_str;
};

// Do not edit below this line
module.exports = repeatString;
