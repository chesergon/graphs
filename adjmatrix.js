// Function to create an adjacency matrix for a graph with `numVertices` vertices
function createAdjacencyMatrix(numVertices) {
    // Initialize a 2D array with all zeros
    const adjacencyMatrix = Array.from({ length: numVertices }, () =>
      Array(numVertices).fill(0)
    );
    return adjacencyMatrix;
  }
  
  // Function to add an edge to the graph
  function addEdge(adjacencyMatrix, vertex1, vertex2) {
    // Set the corresponding cells to 1 to indicate an edge between vertex1 and vertex2
    adjacencyMatrix[vertex1][vertex2] = 1;
    adjacencyMatrix[vertex2][vertex1] = 1; // Comment this line if the graph is directed
  }
  
  // Function to print the adjacency matrix
  function printAdjacencyMatrix(adjacencyMatrix) {
    adjacencyMatrix.forEach((row) => {
      console.log(row.join(' '));
    });
  }
  
  // Example usage:
  
  // Number of vertices in the graph
  const numVertices = 5;
  
  // Create an adjacency matrix for the graph
  const adjacencyMatrix = createAdjacencyMatrix(numVertices);
  
  // Add edges to the graph
  addEdge(adjacencyMatrix, 0, 1);
  addEdge(adjacencyMatrix, 0, 4);
  addEdge(adjacencyMatrix, 1, 2);
  addEdge(adjacencyMatrix, 1, 3);
  addEdge(adjacencyMatrix, 1, 4);
  addEdge(adjacencyMatrix, 2, 3);
  addEdge(adjacencyMatrix, 3, 4);
  
  // Print the adjacency matrix
  console.log('Adjacency Matrix:');
  printAdjacencyMatrix(adjacencyMatrix);
  