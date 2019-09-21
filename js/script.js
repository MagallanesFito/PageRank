const LINKS =5;
const DAMPING = 0.85;
const EPSILON = 0.00001;
var pagerank = new PageRank(EPSILON,DAMPING,LINKS);



function sumColumns(M){
	var N = M[0].length;
	for(var i=0;i<N;i++){
		var suma = 0;
		for(var j=0;j<N;j++){
			suma = suma+ M[j][i];
		}
		//var suma = M[0][i] + M[1][i] + M[2][i] + M[3][i] + M[4][i];
		console.log(suma);		
	}
}
//var M  = pagerank.createExampleMatrix();
//var v = pagerank.run(M);
var M = pagerank.createRandomLinks();
console.log(M);

sumColumns(M);