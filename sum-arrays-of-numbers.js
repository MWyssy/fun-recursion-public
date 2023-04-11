function sumArraysOfNumbers(arr) {
    return arr.reduce((sum, number) => {
        if (Array.isArray(number)) {
            return sum + sumArraysOfNumbers(number)
        }
        return sum + number
    }, 0);
};

module.exports = sumArraysOfNumbers;