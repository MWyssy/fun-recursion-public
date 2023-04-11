function factorial(num) {
    if (num === 1) return num;
    const nextStep = num - 1;
    return num * factorial(nextStep);
};

module.exports = factorial;