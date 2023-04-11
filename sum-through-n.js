function sumThroughN(n) {
    if (n === 1) return n;
    const nextStep = n - 1;
    return n + sumThroughN(nextStep);
};

module.exports = sumThroughN;