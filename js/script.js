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
		var newkey  = result[i]["name"] + "+"+ result[i]["url"]; 
		dict[newkey] = prob[i];
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
function showInDOM(results,limit){
	//Add
	var n = ((results.length>limit) ? limit : results.length);
	for(var i=0;i<n;i++){
		var website = results[i][0].split("+");
		const div = document.createElement("div");

		var capKey = website[0];
		capKey = capKey.charAt(0).toUpperCase() + capKey.slice(1);
			
		div.innerHTML = "<h3>"+capKey+"</h3><a href='#'>"+website[1]+"</a><br><br>";
		document.getElementById("result_content").appendChild(div);
	}
}
function search(){
	var search_text = document.getElementById("input_search").value;
	var search_result = trie.find(search_text);
	//console.log(search_result);
	pagerank.setLinks(search_result.length);
	var M = pagerank.createRandomLinks();
	var v = pagerank.run(M);
	var dict = buildDict(search_result,v);
	console.log(dict);
	var results = sortResultsByRank(dict);
	console.log(results);
	showInDOM(results,10);
}
function main(){
	//Insert dummy data from *generate.py
	trie = insertData();
	pagerank = new PageRank(EPSILON,DAMPING,null);
	//console.log(LINKS);
}
window.onload = main;