/*
This class implements a series of 
Vector/Matrices operations
*/
class VectorAlgebra{
	constructor(links){
		this.links = links;
	}
	/*
	params: 
		rows: number of rows
		cols: number of cols
		initValue: if this value = -999 all values will be set to random
	*/
	createMatrix(initValue){
		var matrix = [];
		for(var i=0; i<this.links; i++) {
		    matrix[i] = [];
		    for(var j=0; j<this.links; j++) {
		        matrix[i][j] = ((initValue ==null) ? Math.random() : initValue);
		    }
		}

		return matrix;
	}
	/*
	params: 
		initValue: if this parameter is null, each element will be set random
	*/
	createVector(initValue){
		var vector= [];
		for(var i=0;i<this.links;i++){
			//var c = ((a < b) ? 'minor' : 'major');
			vector[i] = ((initValue ==null) ? Math.random() : initValue);
		}
		return vector;
	}
	/*
	Calculate p-norm of the vector v 
	*/
	norm(v,p){
		//console.log("hola mundo");
		var sum = 0;
		if(p==1){
			for(var i=0;i<v.length;i++){
				//console.log(v[i]);
				sum = sum + Math.abs(v[i]);
			}
		}
		else{
			for(var i=0;i<v.length;i++){
				//console.log(v[i]);
				var abs = Math.abs(v[i]);
				sum = sum + Math.pow(abs,p);
			}
			sum = Math.pow(sum,1/p);
		}
		return sum;
	}
	/*
	params:
		v1 is expected to be a nxn matrix 
		v2 is expected to be a column vector
	*/
	multiply(v1,v2){
		var v_new =[];
		var curr_sum;
		for(var i=0;i<this.links;i++){
			curr_sum = 0;
			for(var j=0;j<this.links;j++){
				curr_sum+=(v1[i][j]*v2[j]);
			}
			v_new[i] = curr_sum;
		}
		return v_new;
	}
	/*
	Perform element-wise operation beweeen scalar and vector
	params:
		v is a column vector
		scalar is a real number
		operation is a string indicating the type of operation that will be performed: 
			"sum", "dif", "prod", "div"
	*/
	operateScalar(v,scalar,operation){
		var v_new = [];
		for(var i=0;i<this.links;i++){
			if(operation == "sum"){
				v_new[i] = v[i] + scalar;
			}
			else if(operation == "dif"){
				v_new[i] = v[i] - scalar;
			}
			else if(operation == "prod"){
				v_new[i] = v[i] * scalar;
			}
			else if(operation == "div"){
				v_new[i] = v[i] / scalar;
			}
		}
		return v_new;
	}
	/*
	Perform element-wise operation between two vectors. 
	v1,v2 are two vectors of the same size
	operation is a string indicating the type of operation that will be performed: 
			"sum", "dif", "prod", "div"
	*/
	operateVector(v1,v2,operation){
		var v_new = [];
		for(var i=0;i<this.links;i++){
			if(operation == "sum"){
				v_new[i] = v1[i] + v2[i];
			}
			else if(operation == "dif"){
				v_new[i] = v1[i] - v2[i];
			}
			else if(operation == "prod"){
				v_new[i] = v1[i] * v2[i];
			}
			else if(operation == "div"){
				v_new[i] = v1[i] / v2[i];
			}
		}
		return v_new;
	}
}
