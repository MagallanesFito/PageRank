class PageRank{
	constructor(epsilon,damping,links){
		this.damping = damping;
		this.epsilon = epsilon;
		//save an instance of Matrix operation handler
		this.matopHandler = new VectorAlgebra(links);
	}
	run(M){
		//The algorithm runs here
		var v = this.matopHandler.createVector();
		var v_norm1 = this.matopHandler.norm(v,1);
		//Normalize vector
		v = this.matopHandler.operateScalar(v,v_norm1,"div"); 
		//v = v_norm;
		var last_v = this.matopHandler.createVector(100);
		var error = this.matopHandler.norm(this.matopHandler.operateVector(v,last_v,"dif"),2);
		//return v;
		while(error>this.epsilon){
			last_v = v;
			v = this.matopHandler.operateScalar(this.matopHandler.operateScalar(this.matopHandler.multiply(M,v),this.damping,"prod"),(1-this.damping)/v.length,"sum");
			error = this.matopHandler.norm(this.matopHandler.operateVector(v,last_v,"dif"),2);
			//console.log(error);
		}
		return v;
	}
	//only for testing
	createExampleMatrix(){
		var matrix  = this.matopHandler.createMatrix(1);
		matrix[0] = [0, 0, 0, 0, 1];
		matrix[1] = [0.5, 0, 0, 0, 0];
		matrix[2] = [0.5, 0, 0, 0, 0];
		matrix[3] = [0, 1, 0.5, 0, 0];
		matrix[4] = [0, 0, 0.5, 1, 0];
		return matrix;
	}
	/*
	A link cannot mention itself and make sure to pick different links
	*/
	generateRandomIndex(matrix,j){
		var N = matrix[0].length;
		var ithLink = Math.floor(Math.random() * N);
		
		while(matrix[ithLink][j] != 0 && ithLink==j){
			ithLink = Math.floor(Math.random() * N);	
		}
		return ithLink;
	}
	/*
	Creates a Random matrix of links. Given that the sum of each column must be equal to 1. 
	*/
	shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
	createRandomLinks(){
		var matrix  = this.matopHandler.createMatrix(0);
		var N = this.matopHandler.getLinks();
		var indices = [];
		for(var i=0;i<N;i++){
			indices.push(i);
		}
		for(var j=0;j<N;j++){
			var numMentions = Math.floor(Math.random() * (N-1))+1;
			var tmpIndices = indices.slice();
			tmpIndices.splice(j,1);
			tmpIndices = this.shuffleArray(tmpIndices);
			var prob = 1/numMentions;
			//console.log("tmpIndices: "+tmpIndices.length.toString());
			for(var i=0;i<numMentions;i++){
				var ithLink = tmpIndices[i]; 
				//console.log(tmpIndices.length);
				matrix[ithLink][j] = prob;
			}
		}
		return matrix;
	}

}