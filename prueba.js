/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
const Graph = require('node-dijkstra');

const graph = new Graph();
graph.addNode('A', { B: 1, C: 2 });
graph.addNode('B', { A: 1, C: 1, D: 2 });
graph.addNode('C', { A: 2, B: 1, D: 1 });
graph.addNode('D', { B: 2, C: 1 });

const path = graph.path('A', 'D');
console.log('Ruta encontrada:', path);