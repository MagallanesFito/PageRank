/*
Website represented as a TrieNode
*/
class Website{
	constructor(key){
		this.key = key;
		this.parent =null;
		this.children = {};
		this.end = false;
		//Generates url from name
		this.url = ((key == null)? null : "http://www."+this.key.toString()+".com");
		this.id = id++;
	}
	getWord(){
		var out = []
		var node = this;

		while(node !== null){
			out.unshift(node.key);
			node = node.parent;
		}
		return out.join('');
	}
	//For testing
	show(){
		if(this.key == null){
			console.log(null);
		}
		else{
			//Capitalize first letter. only for presentation purposes.
			var capKey = this.key;
			capKey = capKey.charAt(0).toUpperCase() + capKey.slice(1);
			console.log("id: "+ this.id+"\nName: "+capKey+" \nurl: " + this.url);	
		}
	}
	
}