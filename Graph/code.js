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

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = graphGenerator(edges);
  const queue = [[nodeA, 0]];
  const visited = [];
  while (queue.length) {
    let current = queue.shift();
    if (current[0] === nodeB) return current[1];
    visited.push(current);
    for (let neighbor of graph[current[0]]) {
      if (!visited.includes(neighbor)) {
        queue.push([neighbor, current[1] + 1]);
        visited.push(neighbor);
      }
    }
  }
  return -1
};

const graphGenerator = (edgeList) => {
  const graph = {};
  for (let pair of edgeList) {
    graph[pair[0]] ? graph[pair[0]].push(pair[1]) : graph[pair[0]] = [pair[1]]
    graph[pair[1]] ? graph[pair[1]].push(pair[0]) : graph[pair[1]] = [pair[0]] 
  }
  return graph;
};

const islandCount = (grid) => {
  let count = 0;
  const visited = new Set();
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++){
      if (explore(grid, row, col, visited) === true) {
        count += 1;
      }
        
    }
  }
  return count;
};

const explore2 = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  
  if (grid[row][col] !== "L") return false;
  const pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
    
  explore2(grid, row, col + 1, visited);
  explore2(grid, row, col - 1, visited)
  explore2(grid, row + 1, col, visited)
  explore2(grid, row - 1, col, visited)

    
  
  return true; 
};

const minimumIsland = (grid) => {
  const islands = [];
  const visited = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++ ){
      if (grid[r][c] === "L") {
        let size = explore(grid, r, c, visited)
        if (size) {
          islands.push(size)  
        }
        
      }
    }
  }
  return Math.min(...islands);
};

const explore = (grid, r, c, visited) => {
  if (r >= grid.length || r < 0) return 0;
  if (c >= grid[0].length || c < 0) return 0;
  if (grid[r][c] === "W") return 0;
  const pos = r + "," + c; 
  if (visited.has(pos)) return 0;
  visited.add(pos);
  let up = explore(grid, r - 1, c, visited);
  let down = explore(grid, r + 1, c, visited);
  let left = explore(grid, r, c - 1, visited);
  let right = explore(grid, r, c + 1, visited);
  return 1 + up + down + left + right;
};

const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();
  let queue = [[startRow, startCol, 0]]; 
 
  while (queue.length) {
    let [r, c, steps] = queue.shift();
    if (grid[r][c] === "C") return steps;
    let pos = r + "," + c;
    visited.add(pos);
     const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let dir of directions){
      let newR = r + dir[0];
      let newC = c + dir[1];
      
      if (0 <=newR && newR < grid.length && 0 <=newC && newC < grid[0].length){
        if (!visited.has(newR + "," + newC) && grid[newR][newC] !== "X"){
          queue.push([newR, newC, steps + 1])
          visited.add(newR + "," + newC)
        }
      }
    }
  }
  // console.log(visited)
  return -1;
};

const longestPath = (graph) => {
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  
  for (let node in graph) {
    pathExpand(graph, node, distance);
  }
  return Math.max(...Object.values(distance));
};

const pathExpand = (graph, node, distance) =>{
  if (node in distance) return distance[node];
  let longest = 0;
  for (let neighbor of graph[node]) {
    let current = pathExpand(graph, neighbor, distance)
    if (current > longest) longest = current; 
  }
  distance[node] = 1 + longest 
  return distance[node]
};


const semestersRequired = (numCourses, prereqs) => {
  const prereqGraph = {};
  if (prereqs.length === 0) return 1;
  for (let courses of prereqs) {
    let [a, b] = courses;
    if (!prereqGraph[b]) prereqGraph[b] = [];
    if (!prereqGraph[a]) {
      prereqGraph[a] = [b]
    } else {
      prereqGraph[a].push(b);
    }
  }
  const paths = {};
  
  for (let course in prereqGraph) {
    if (prereqGraph[course].length === 0) paths[course] = 1
  }
  for (let course in prereqGraph) {
    pathExplore(prereqGraph, course, paths);
  }
  return Math.max(...Object.values(paths))
};

const pathExplore = (graph, course, paths) => {
  if (course in paths) return paths[course];
  let longest = 0;
  for (let postReq of graph[course]) {
    let current = pathExplore(graph, postReq, paths);
    if (current > longest) longest = current;
  }
  paths[course] = longest + 1;
  return paths[course];
  
};