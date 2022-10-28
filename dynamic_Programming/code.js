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


const tribonacci = (n, memory = {}) => {
    // todo
    if (n <= 1) return 0;
    if (n === 2 ) return 1;
    if (memory[n]) return memory[n];
    const current = tribonacci(n - 1, memory) + tribonacci(n - 2, memory) + tribonacci(n - 3, memory);
    memory[n] = current;
    return current
};



const sumPossible = (amount, numbers, memo = {}) => {
    // todo
    if (amount === 0) return true;
    if (amount <0 ) return false;
    if (amount in memo ) return memo[amount];
    for (let num of numbers) {
      if (sumPossible(amount - num, numbers, memo)) {
        memo[amount] = true
        return true;
      }
    }
    
    memo[amount] = false
    return false;
};