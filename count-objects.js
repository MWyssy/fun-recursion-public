let count = 1;
function countObjects(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            countObjects(obj[key]);
            return count;
        };     
    };
    return count++;
};

module.exports = countObjects;