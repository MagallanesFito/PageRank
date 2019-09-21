const LINKS =5;
const DAMPING = 0.85;
const EPSILON = 0.00001;
var pagerank = new PageRank(EPSILON,DAMPING,LINKS);

//var M  = pagerank.createExampleMatrix();
//var v = pagerank.run(M);
var M = pagerank.createRandomLinks();
console.log(M);
