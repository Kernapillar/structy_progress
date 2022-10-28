const fib = (n, memory = {}) => {
    // todo
    if (memory[n]) return memory[n];
    if (n === 0){
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    let result = fib(n - 1, memory) + fib(n - 2, memory)
    memory[n] = result;
    return result;
  };