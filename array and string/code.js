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
};

const intersection = (a, b) => {
  // todo
  const hashMap = {};
  const retArr = []
  for(let i = 0; i < a.length; i++){
    hashMap[a[i]] = i;
  }
  for (let j = 0; j < b.length; j++){
    if (hashMap[b[j]] !== undefined){
      retArr.push(b[j])
    }
  }
  return retArr
};

const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length - 1;
  while (i < j){
    if (nums[i] !== 5) {
      i ++ ;
    } else {
      if (nums[j] !== 5){
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        j --; 
      }
    }
  }
  return nums
};