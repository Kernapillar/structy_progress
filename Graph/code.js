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

const connectedComponentsCount = (graph) => {
  // todo
  const visited = [];
  let count = 0;
  for (let node of Object.keys(graph)) {
    if (!visited.includes(parseInt(node))) {
      compCheck(node, graph, visited);
      console.log("count, visited", count, visited)
      count += 1; 
    }
  }
  return count;
};

const compCheck = (node, graph, visited) => {
  visited.push(node);
  for (let neighbor of graph[node]) {
    if (!visited.includes(neighbor)) {
      compCheck(neighbor, graph, visited)
    }
  }
  
}

const largestComponent = (graph) => {
  // todo
  const visited = [];
  let largest = 0
  for (let node in graph) {
    if (!visited.includes(node)) {
      let current = compCounter(node, graph, visited);
      if (current > largest) largest = current;
    }
  }
  return largest;
 };

const compCounter = (node, graph, visited) => {
  visited.push(node);
  let count = 1;
  for(let neighbor of graph[node]) {
    if (!visited.includes(neighbor)) {
      count += compCounter(neighbor, graph, visited)
    }
  }
  return count;
}