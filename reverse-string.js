function reverseString(str) {
    if (str.length === 1) return str;
    const nextStep = str.slice(0, -1)
    return str.slice(-1) + reverseString(nextStep)
};

module.exports = reverseString;