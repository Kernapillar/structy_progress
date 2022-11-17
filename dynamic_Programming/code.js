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


const minChange = (amount, coins) => {
    let result = minChanger(amount, coins);
    if (result === Infinity) return -1; 
    return result;
  }
  
  
  const minChanger = (amount, coins, memo = {}) => {
    // todo
    if (amount === 0 ) return 0; 
    if (amount < 0) return Infinity;
    if (amount in memo) return memo[amount];
    
    let best = Infinity;
    for (let coin of coins){
      let current = 1 + minChanger(amount - coin, coins, memo);
      best = Math.min(best, current)
    }
    
    return memo[amount] = best;
};

const maxPathSum = (grid) => {
  // todo
  let memo = {};
  return bestPath(grid, memo, 0, 0);
};

const bestPath = (grid, memo, row, col) => {
  if (`${row},${col}` in memo) return memo[`${row},${col}`];
  if (row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col];
  let validDirs = [];
  if (row !== grid.length - 1) {
    validDirs.push(bestPath(grid, memo, row + 1, col));
  }
  if (col !== grid[0].length - 1) {
    validDirs.push(bestPath(grid, memo, row, col + 1));
  }
  let bestDir = Math.max(...validDirs);
  memo[`${row},${col}`] = bestDir + grid[row][col];
  return memo[`${row},${col}`];
  
};