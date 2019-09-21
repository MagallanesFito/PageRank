var id = 0;
var trie;
/*var pagerank = new PageRank(EPSILON,DAMPING,LINKS);*/


//var M  = pagerank.createExampleMatrix();
//var v = pagerank.run(M);

/*
var w1 = new Website("google");
var w2 = new Website("facebook");
var w3 = new Website("linkedin");
w1.show();
w2.show();
w3.show();

*/
function main(){
	//Insert dummy data from *generate.py
	trie = insertData();
	console.log(LINKS);
}
window.onload = main;