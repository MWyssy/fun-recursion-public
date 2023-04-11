function includesValue(arr, value) {
    if (arr.includes(value)) return true;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (includesValue(arr[i], value)) return true;
        };
    };
    return false;
};

module.exports = includesValue;