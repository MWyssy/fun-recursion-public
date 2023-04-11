function analyzeArray(string, arr) {
    let index = 0;
    let indexValue = '';

    if (arr.length === 0) return console.log('');

    for (index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            return analyzeArray(`${string}.${index}`, arr[index]);
        };
        indexValue = arr[index];
        console.log(`${string}.${index}: ${indexValue}`);
    };

};

analyzeArray('Mike', [
    'is cool',
    'is learning to code',
    'can be funny sometimes',
    [
        'and is also a nice guy',
        [
            'but can sometimes be a bit annoying',
            'and a bit self-centered'
        ]
    ]
])

module.exports = analyzeArray;