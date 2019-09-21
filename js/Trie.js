//MOVE THIS FUNCTION TO PAGERANK
function findAllWords(node,arr){
		if(node.end){
			arr.unshift(node.getWord());
		}

		for(var child in node.children){
			findAllWords(node.children[child],arr);
		}
}
class Trie{
	constructor(){
		this.root = new Website(null);
	}
	insert(word){
		var node = this.root;

		for(var i=0;i<word.length;i++){
			if(!node.children[word[i]]){
				node.children[word[i]] = new Website(word[i]);
				node.children[word[i]].parent = node;
			}
			node = node.children[word[i]];
			if(i == word.length-1){
				node.end = true;
			}
		}
	}
	contains(word){
		var node = this.root;

		for(var i=0;i<word.length;i++){
			if(node.children[word[i]]){
				node = node.children[word[i]];
			}
			else{
				return false;
			}
		}
		return node.end;
	}
	find(prefix){
		var node = this.root;
		var out = [];

		for(var i=0;i<prefix.length;i++){
			if(node.children[prefix[i]]){
				node = node.children[prefix[i]];
			}
			else{
				return out;
			}
		}
		findAllWords(node,out);
		return out;
	}
}