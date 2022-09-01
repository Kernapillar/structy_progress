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