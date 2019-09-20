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

}