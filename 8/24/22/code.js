const pairSum = (numbers, targetSum) => {
    // todo
    const hashmap = {};
    for(let i = 0; i < numbers.length; i++) {
      console.log(i, hashmap)
      console.log("looking for", (targetSum - numbers[i]))
      if (hashmap[(targetSum - numbers[i])] === undefined) {
        hashmap[numbers[i]] = i;
      } else {
        console.log("found ", hashmap[(targetSum - numbers[i])])
        return [hashmap[(targetSum - numbers[i])], i]
      }
    }
    
  };
  const pairProduct = (numbers, targetProduct) => {
    // todo
    const hashmap = {};
    for(let i = 0; i < numbers.length; i++) {
      
      if (hashmap[(Math.floor(targetProduct / numbers[i]))] === undefined) {
        hashmap[numbers[i]] = i;
      } else {
        return [hashmap[(Math.floor(targetProduct / numbers[i]))], i]
      }
    }
    

