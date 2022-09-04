'use strict';

const Graph = require('../graph');

describe('Breadth First Test', () => {
  it('should traverse the graph', () => {
    let myGraph = new Graph();

    myGraph.addVertex('A');
    myGraph.addVertex('B');
    myGraph.addVertex('C');
    myGraph.addVertex('D');
    myGraph.addVertex('E');
    myGraph.addVertex('F');

    myGraph.addEdge('A', 'B');
    myGraph.addEdge('A', 'C');
    myGraph.addEdge('B', 'D');
    myGraph.addEdge('C', 'E');
    myGraph.addEdge('D', 'E');
    myGraph.addEdge('D', 'F');
    myGraph.addEdge('E', 'F');

    expect(myGraph.breadthFirst('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
