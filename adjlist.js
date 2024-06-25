// Class to represent a graph using an adjacency list
class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjacencyList = new Map();
      
      // Initialize the adjacency list
      for (let i = 0; i < numVertices; i++) {
        this.adjacencyList.set(i, []);
      }
    }
  
    // Function to add an edge to the graph
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // Comment this line if the graph is directed
    }
  
    // Function to print the adjacency list
    printGraph() {
      const keys = this.adjacencyList.keys();
  
      for (let key of keys) {
        const values = this.adjacencyList.get(key);
        let list = '';
        for (let value of values) {
          list += value + ' ';
        }
        console.log(`${key} -> ${list}`);
      }
    }
  }
  
  // Example usage:
  
  // Number of vertices in the graph
  const numVertices = 5;
  
  // Create a graph
  const graph = new Graph(numVertices);
  
  // Add edges to the graph
  graph.addEdge(0, 1);
  graph.addEdge(0, 4);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 3);
  graph.addEdge(3, 4);
  
  // Print the adjacency list
  console.log('Adjacency List:');
  graph.printGraph();
  