
function countWhitespace(str, count = 0) {
    if (/\s/g.test(str) === false) return count;
    if (/\s/g.test(str)) count++;
    const nextStep = str.replace(/\s/, '-');
    return countWhitespace(nextStep, count);;
};

module.exports = countWhitespace;