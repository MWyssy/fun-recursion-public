  
  function fibonacci(num) {
    let number = num - 1;
    if (number < 2) {
      return number;
    }
    const result = fibonacci(num - 1) + fibonacci(num - 2);
    return result
  }


module.exports = fibonacci;
