const depthFirstValues = (root) => {
    // todo
    const stack = [root];
    const values = [];
    while (stack.length !== 0) {
      let current = stack.shift()
      console.log(stack)
      values.push(current.val);
      if (current.right) {
        stack.unshift(current.right)
      } 
      if (current.left) {
        stack.unshift(current.left)
      }
      
    }
    return values;
  };

const breadthFirstValues = (root) => {
    // todo
    const nodes = [root];
    const values = [];
    
    while (nodes[0]) {
      let current = nodes.shift();
      values.push(current.val);
      if (current.left) {
        nodes.push(current.left)
      }
      if (current.right) {
        nodes.push(current.right)
      }
    }
    return values
};

const treeSum = (root) => {
    // todo
    const nodes = [root];
    let total = 0;
    
    while (nodes[0]) {
      let current = nodes.shift();
      total += current.val;
      if (current.left) nodes.push(current.left);
      if (current.right) nodes.push(current.right);
    }
    return total;
};


const treeIncludes = (root, target) => {
    // todo
    const nodes = [root];
    while (nodes[0]) {
      let current = nodes.shift();
      if (current.val === target) {
        return true;
      }
      if (current.left) nodes.push(current.left);
      if (current.right) nodes.push(current.right);
      
    }
    return false
};

const treeMinValue = (root) => {
    // todo
    const nodes = [root];
    let lowest = root.val;
    while (nodes[0]) {
      let current = nodes.shift();
      if (current.val <= lowest) {
        lowest = current.val
      }
      if (current.left) nodes.push(current.left);
      if (current.right) nodes.push(current.right);
    }
    return lowest
};

const maxPathSum = (root) => {
    console.log("RAN WITH ", root.val)
    // todo
    const currentVal = root.val;
    
    if (!root.left && !root.right) {
      return currentVal;
    }
    if (root.left && root.right) {
      const left = maxPathSum(root.left);
      const right = maxPathSum(root.right);
      if (left > right) {
        return currentVal + left
      } else {
        return currentVal + right
      }
    }
    if (root.left) {
      return currentVal + maxPathSum(root.left)
    } else {
      return currentVal + maxPathSum(root.right)
    }
    
};

const pathFinder = (root, target) => {
    const result = pathFinderhelper(root, target);
    if (result) {
      return result.reverse();
    }  else {
      return null
    }
    
  }
  
  const pathFinderhelper = (root, target) => {
    // todo
    if (root === null) {return null}
    if (root.val === target) {
      return [root.val]
    }
  
    if (root.left) {
      let pathLeft = pathFinderhelper(root.left, target)
      if (pathLeft !== null) {
        pathLeft.push(root.val);
        return pathLeft
      }
    }
    if (root.right) {
      let pathRight = pathFinderhelper(root.right, target)
      if (pathRight !== null) {
        pathRight.push(root.val)
        return pathRight
      }
    }
    return null
  };
  
  module.exports = {
    pathFinder,
  };
  
const treeValueCount = (root, target) => {
  // todo
  let count = 0;
  if (!root) return count;
  const nodes = [root];
  while (nodes.length !== 0) {
    let current = nodes.shift();
    if (current.val === target) {
      count += 1;
    }
    if (current.left !== null) {
      nodes.push(current.left);
    }
    if (current.right !== null) {
      nodes.push(current.right);
    }
  }
  return count
};

const treeValueCountRecursive = (root, target) => {
  // todo
  let count = 0;
  if (!root) return count
  if (root.val === target) {
    count = 1
  }
  if (root.left !== null) {
    count += treeValueCount(root.left, target)
  }
   if (root.right !== null) {
    count += treeValueCount(root.right, target)
  }
  return count;
};

const howHigh = (node) => {
  // todo
  if (!node) return -1 
  const left = howHigh(node.left);
  const right = howHigh(node.right);
  if (right === -1 && left === -1) {
    return 0
  } 
  if (right < left) {
    return (1 + left)
  } else {
    return (1 + right)
  }
  
};

const bottomRightValue = (root) => {
  // todo
  let final = root;
  const nodes = [root];
  while (nodes.length !== 0) {
    let current = nodes.shift();
    final = current;
    if (current.left) {
      nodes.push(current.left);    
    }
    if (current.right) {
      nodes.push(current.right);
    }
  } 
  return final.val
};

const allTreePaths = (root) => {
  // todo
  if (root === null) {return []}
  if (!root.left && !root.right) {
    return [[root.val]]
  }
  const retArr = [];
  const leftSub = allTreePaths(root.left);
  const rightSub = allTreePaths(root.right);
  for (let subpath of leftSub) {
    retArr.push([root.val, ...subpath])
  }
   for (let subpath of rightSub) {
    retArr.push([root.val, ...subpath])
  }
  
  
  return retArr;
};

const treeLevels = (root) => {
  // todo
  if (!root) return [];
  const nodes = [[root, 0]];
  const levels = [];
  while (nodes.length) {
    let current = nodes.shift();
    if (!levels[current[1]]){
      let newLevel = [current[0].val];
      levels[current[1]] = newLevel;
    } else {
      levels[current[1]].push(current[0].val)
    }
    if (current[0].right) {
      nodes.unshift([current[0].right, (current[1] + 1)])
    } 
    if (current[0].left) {
      nodes.unshift([current[0].left, (current[1] + 1)])
    } 
  }
  return levels;
};

const levelAverages = (root) => {
  // todo
  const levels = []
  if (!root) return levels;
  _levelAverages(root, levels, 0)
  values = [];
  for (let row of levels) {
    let len = row.length
    let total = row.reduce((sum, current) => sum + current)
    values.push(total/len)
  }
  return values;
};

const _levelAverages = (root, levels, currentLevel) => {
  if (!root) return null;
  if (!levels[currentLevel]) {
    levels.push([root.val])
  } else {
    levels[currentLevel].push(root.val)
  }
  _levelAverages(root.left, levels, currentLevel + 1)
  _levelAverages(root.right, levels, currentLevel + 1)
};
