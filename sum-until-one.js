function sumUntilOne(num) {
    if (num < 10) return num;
    const digits = num.toString().split('');
    const sumOfDigits = digits.reduce((sum, digit) => sum + Number(digit), 0);
    const nextStep = sumOfDigits
    return sumUntilOne(nextStep);
};

module.exports = sumUntilOne;