const matrix = [
	[0, 1, 0, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 0, 1, 1],
	[0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0],
];

function getNeighbors(node, matrix) {
	// Create an array to hold the valid neighbors
  let neighbors = [];
	// UP:
	// Identify the node above the current node, if it exists
	// Push that node into the new array
	if (node[0] - 1 >= 0) {
		neighbors.push([node[0] - 1, node[1]]);
	}
	// DOWN:
	// Identify the node below the current node, if it exists
	// Push that node into the new array
	if (node[0] + 1 < matrix.length ) {
    neighbors.push([node[0] + 1, node[1]]);

	}
	// LEFT:
	// Identify the node to the left of the current node, if it exists
	// Push that node into the new array
	if ( node[1] - 1 >= 0) {
		neighbors.push([node[0], node[1] - 1]);
	}

	// RIGHT:
	// Identify the node to the right of the current node, if it exists
	// Push that node into the new array
	if ( node[1] + 1 < matrix[0].length) {
    neighbors.push([node[0], node[1] + 1]);
    ;
	}
	// Return the neighbors array
	return neighbors;
}

function traverseMatrix(matrix, startNode) {
  // traversal logic here
}

//Example search function stub
function searchMatrix(matrix, startNode, thingYouSearchFor) {
  // search logic here

  // The thingYouSearchFor might represent an end node, a value in the matrix,
  // or some sort of condition that would need to be met to end the search
}

// returns the correct neighbors from an internal node
console.log(getNeighbors([2, 2], matrix)); // returns [ [1,2], [3,2], [2,1], [2,3] ]

// returns the correct neighbors from a corner node
console.log(getNeighbors([0, 0], matrix)); // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
console.log(getNeighbors([2, 0], matrix)); // returns [ [1,0], [3,0], [2,1] ]
