class Website{
	constructor(name){
		this.name = name;
		this.url = ((name == null)? null : "http://www."+this.name.toString()+".com");
		this.description = "This is a sample Website";
	}
	hashcode(){
		var objname = this.name;
		var hash = 0;
	    for (var i = 0; i < objname.length; i++) {
	        var character = objname.charCodeAt(i);
	        hash = ((hash<<5)-hash)+character;
	        hash = hash & hash; // Convert to 32bit integer
	    }
	    return hash;
	}
}