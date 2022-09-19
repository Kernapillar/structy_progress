const hasPath = (graph, src, dst) => {
    // todo
    const stack = [src];
    while (stack.length) {
      let current = stack.pop();
      if (current === dst) {
        return true
      }
      for (let neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
    return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {};
  for (connection of edges) {
    if (!graph[connection[0]]) {
      graph[connection[0]] = [connection[1]];
    } else {
      graph[connection[0]].push(connection[1])
    }
    if (!graph[connection[1]]) {
      graph[connection[1]] = [connection[0]];
    } else {
      graph[connection[1]].push(connection[0])
    }
  }
  const visited = [];
  const stack = [nodeA];
  while (stack.length){
    let current = stack.pop();
    if (current === nodeB) return true;
    for (let neighbor of graph[current]) {
      if (!visited.includes(neighbor)){
        stack.push(neighbor)
      }
      visited.push(neighbor)
    }
  }
  return false
};