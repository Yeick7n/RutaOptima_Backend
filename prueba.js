/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
const Graph = require('node-dijkstra');

const graph = new Graph();
graph.addNode('A', { B: 2, C: 2 });
graph.addNode('B', { A: 2, C: 5, D: 4 });
graph.addNode('C', { A: 2, B: 5, D: 3 });
graph.addNode('D', { B: 4, C: 3 });

const path = graph.path('A', 'D');
console.log('Ruta encontrada:', path);