
function fibonacciF(num1, num2) {
    let currentNum = num1;
    let nextNum = num2;
    let count = 0;
    function generate() {
      const result = currentNum + nextNum;
      if (count ===0) {
        count++;
        return num1;
      }  
      if (count === 1) {
        count++;
        return num2;
      }
      currentNum = nextNum;
      nextNum = result;
      return result;
  }
    return generate
  }
  
  
  function fibonacci(num, result = 0) {
    const fibonacciSequence = fibonacciF(0, 1)
    if (num < 2) {
        console.log(num, result)
        return result = fibonacciSequence();
    }
    result = fibonacciSequence();
    const nextStep = num - 1;
    return fibonacci(nextStep, result);
};


module.exports = fibonacci;
