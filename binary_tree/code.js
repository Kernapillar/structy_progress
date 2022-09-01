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