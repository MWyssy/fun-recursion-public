function deepFreeze(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        };
    };
    Object.freeze(obj);
    return obj
};

module.exports = deepFreeze;