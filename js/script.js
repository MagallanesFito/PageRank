const LINKS =5;
const DAMPING = 0.85;
const EPSILON = 0.00001;
var id = 0;
/*var pagerank = new PageRank(EPSILON,DAMPING,LINKS);*/


//var M  = pagerank.createExampleMatrix();
//var v = pagerank.run(M);

var w1 = new Website("google");
var w2 = new Website("facebook");
w1.show();
w2.show();

