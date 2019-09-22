var id = 0;
var trie;
var pagerank; 


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

/*handles DOM functionality*/
function verifyInput(){
	var search_text = document.getElementById("input_search").value;
	if(search_text.length > 0){
		document.getElementById('start_button').disabled = false;
	}  else {
		document.getElementById('start_button').disabled = true;
	}
}
//Builds a dictionary "result" : "prob"
function buildDict(result,prob){
	var dict = {};
	for(var i =0;i<result.length;i++){
		dict[result[i]] = prob[i];
	}
	return dict;
}
function sortResultsByRank(dict){
	var items = Object.keys(dict).map(function(key) {
	  return [key, dict[key]];
	});
	items.sort(function(first, second) {
	  return second[1] - first[1];
	});
	return items;
}
function search(){
	var search_text = document.getElementById("input_search").value;
	var search_result = trie.find(search_text);
	console.log("resultados trie");
	console.log(search_result);
	pagerank.setLinks(search_result.length);
	var M = pagerank.createRandomLinks();
	var v = pagerank.run(M);
	var dict = buildDict(search_result,v);
	var results = sortResultsByRank(dict);
	console.log(v);
	console.log("resultados pagerank");
	console.log(results);
}
function main(){
	//Insert dummy data from *generate.py
	trie = insertData();
	pagerank = new PageRank(EPSILON,DAMPING,null);
	//console.log(LINKS);
}
window.onload = main;