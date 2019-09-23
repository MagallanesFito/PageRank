var id = 0;
var trie;
var pagerank; 


/*Enables/Disables search button when input text is either empty or not empty*/
function verifyInput(){
	var search_text = document.getElementById("input_search").value;
	if(search_text.length > 0){
		document.getElementById('start_button').disabled = false;
	}  else {
		document.getElementById('start_button').disabled = true;
	}
}
function buildDict(result,prob){
	var dict = {};
	for(var i =0;i<result.length;i++){
		//Key is an object type Website GET HAASHCODE 
		var newkey = result[i].hashcode();
		/*
		Dictionary where 
			key = "website hashcode"
			value= [probability mention,website]
		*/
		dict[newkey] = [prob[i],result[i]];
	}
	return dict;
}
function sortResultsByRank(dict){
	var items = Object.keys(dict).map(function(key) {
	  return [dict[key][1], dict[key][0]];
	});
	//Sort in ascending order according to probaility
	items.sort(function(first, second) {
	  return second[1] - first[1];
	});
	return items;
}
function showInDOM(results,limit){
	//Add
	var n = ((results.length>limit) ? limit : results.length);

	const div = document.createElement("div");
	div.innerHTML = "<h2>Search result</h2><p style='font-size: 15px; margin-top: -15px;'>Show "+n+" results</p";
	for(var i=0;i<n;i++){
		var curr_website = results[i][0];
		var prob_mention = results[i][1];
		var capKey = curr_website.name;
		capKey = capKey.charAt(0).toUpperCase() + capKey.slice(1);
		
		div.innerHTML += "<a href='#'><h3>"+capKey+"</h3><a><p style='color:green; margin-top: -10px;'>"+curr_website.url+"</p><p style='margin-top: -10px;font-size:15px;' >"+curr_website.description+"</p>";
		document.getElementById("result_content").appendChild(div);
	}
}
function search(){
	var search_text = document.getElementById("input_search").value;
	var search_result = trie.find(search_text);

	pagerank.setLinks(search_result.length);
	var M = pagerank.createRandomLinks();
	var v = pagerank.run(M);
	var dict = buildDict(search_result,v);
	var results = sortResultsByRank(dict);
	showInDOM(results,SEARCH_RESULTS);
}
function main(){
	//Insert dummy data from *generate.py
	trie = insertData();
	pagerank = new PageRank(EPSILON,DAMPING,null);
}
window.onload = main;