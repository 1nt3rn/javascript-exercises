const palindromes = function(str) {
    const letters = str.toLowerCase().split('')
        .filter(letter => (letter >= 'a' && letter <= 'z') || (letter >= '0' && letter <= '9'));
    return letters.slice().reverse().join('') === letters.join('');
};
// Do not edit below this line
module.exports = palindromes;