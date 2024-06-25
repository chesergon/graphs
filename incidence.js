// Function to create an incidence matrix for a graph with `numVertices` vertices and `numEdges` edges
function createIncidenceMatrix(numVertices, numEdges) {
    // Initialize a 2D array with all zeros
    const incidenceMatrix = Array.from({ length: numVertices }, () =>
      Array(numEdges).fill(0)
    );
    return incidenceMatrix;
  }
  
  // Function to add an edge to the incidence matrix
  function addEdge(incidenceMatrix, edgeIndex, vertex1, vertex2) {
    // Set the corresponding cells to 1 to indicate an edge between vertex1 and vertex2
    incidenceMatrix[vertex1][edgeIndex] = 1;
    incidenceMatrix[vertex2][edgeIndex] = 1; // Comment this line if the graph is directed
  }
  
  // Function to print the incidence matrix
  function printIncidenceMatrix(incidenceMatrix) {
    incidenceMatrix.forEach((row) => {
      console.log(row.join(' '));
    });
  }
  
  // Example usage:
  
  // Number of vertices in the graph
  const numVertices = 5;
  
  // Number of edges in the graph
  const numEdges = 7;
  
  // Create an incidence matrix for the graph
  const incidenceMatrix = createIncidenceMatrix(numVertices, numEdges);
  
  // Add edges to the graph
  addEdge(incidenceMatrix, 0, 0, 1);
  addEdge(incidenceMatrix, 1, 0, 4);
  addEdge(incidenceMatrix, 2, 1, 2);
  addEdge(incidenceMatrix, 3, 1, 3);
  addEdge(incidenceMatrix, 4, 1, 4);
  addEdge(incidenceMatrix, 5, 2, 3);
  addEdge(incidenceMatrix, 6, 3, 4);
  
  // Print the incidence matrix
  console.log('Incidence Matrix:');
  printIncidenceMatrix(incidenceMatrix);
  