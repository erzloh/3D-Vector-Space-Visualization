// --------------  Define vector space classes --------------
function VectorSpace() {
	// Initialize an object of vectors
	this.vectors = {
		initial: [],
		transition: [], 
		final: []
	}
	
	// Initialize an object of points
	this.points = {
		initial: [],
		transition: [],
		final: []
	}

	// Initialize array of matrices
	this.matrices = [];
	this.finalMat;

	// Initilize array of cubes
	this.cubes = [];

	this.addVector = function(x, y, z) {
		this.vectors.initial.push(new Vec3(x, y, z));
		this.vectors.transition.push(new Vec3(x, y, z));
		this.vectors.final.push(new Vec3(x, y, z));
	}

	// A point is a vector with a different color
	this.addPoint = function(x, y, z) {
		this.points.initial.push(new Vec3(x, y, z));
		this.points.transition.push(new Vec3(x, y, z));
		this.points.final.push(new Vec3(x, y, z));
	}

	this.addMatrix = function(matArr) {
		this.matrices.push(new Mat3(matArr[0], matArr[1], matArr[2], matArr[3], matArr[4], matArr[5], matArr[6], matArr[7], matArr[8]));
	}

	this.addCube = function(origin, r, color) {
		this.cubes.push(new Cube(origin, r, color));
	}

	this.draw = function(opacity) {
		drawOrigin();
		drawAxes();

		// Draw the final vectors
		for (let i = 0; i < this.vectors.final.length; i++) {
			if (i === 0) {
				drawVector(this.vectors.final[i], `rgba(0, 255, 0, ${opacity})`);
			}
			else if (i === 1) {
				drawVector(this.vectors.final[i], `rgba(255, 0, 0, ${opacity})`);
			}
			else if (i === 2) {
				drawVector(this.vectors.final[i], `rgba(0, 0, 255, ${opacity})`);
			}
			else {
				drawVector(this.vectors.final[i], `rgba(162, 14, 179, ${opacity})`);
			}
		}

		// Draw lines between the vertices
		drawLineBetweenPoints(this.points.final[0], this.points.final[1], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[1], this.points.final[2], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[2], this.points.final[3], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[3], this.points.final[0], `rgba(0, 0, 0, ${opacity})`);

		drawLineBetweenPoints(this.points.final[4], this.points.final[5], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[5], this.points.final[6], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[6], this.points.final[7], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[7], this.points.final[4], `rgba(0, 0, 0, ${opacity})`);

		drawLineBetweenPoints(this.points.final[0], this.points.final[4], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[1], this.points.final[5], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[2], this.points.final[6], `rgba(0, 0, 0, ${opacity})`);
		drawLineBetweenPoints(this.points.final[3], this.points.final[7], `rgba(0, 0, 0, ${opacity})`);

		// Draw the cubes
		 for (let i = 0; i < this.cubes.length; i++) {
			this.cubes[i].draw();
		 }
	}

	this.applyMatrices = function() {
		// Multuply all the matrices together
		for (let i = 0; i < this.matrices.length; i++) {
			if (i === 0) {
				this.finalMat = this.matrices[i];
			}
			else {
				this.finalMat = this.matrices[i].matMult(this.finalMat);
			}
		}

		// Transform the vectors
		for (let i = 0; i < this.vectors.final.length; i++) {
			this.vectors.final[i].multMat(this.finalMat);
		}

		// Transform the points
		for (let i = 0; i < this.points.final.length; i++) {
			this.points.final[i].multMat(this.finalMat);
		}

		// Transform the cubes
		for (let i = 0; i < this.cubes.length; i++) {
			for (let j = 0; j < this.cubes[i].vertices.final.length; j++) {
				this.cubes[i].vertices.final[j].multMat(this.finalMat);
			}
		}
	}

	this.reset = function() {
		// Reset the vectors
		for (let i = 0; i < this.vectors.transition.length; i++) {
			this.vectors.transition[i].x = this.vectors.initial[i].x;
			this.vectors.transition[i].y = this.vectors.initial[i].y;
			this.vectors.transition[i].z = this.vectors.initial[i].z;
		}

		// Reset the points
		for (let i = 0; i < this.points.transition.length; i++) {
			this.points.transition[i].x = this.points.initial[i].x;
			this.points.transition[i].y = this.points.initial[i].y;
			this.points.transition[i].z = this.points.initial[i].z;
		}

		// Rest the final vectors
		for (let i = 0; i < this.vectors.final.length; i++) {
			this.vectors.final[i].x = this.vectors.initial[i].x;
			this.vectors.final[i].y = this.vectors.initial[i].y;
			this.vectors.final[i].z = this.vectors.initial[i].z;
		}

		// Reset the final points
		for (let i = 0; i < this.points.final.length; i++) {
			this.points.final[i].x = this.points.initial[i].x;
			this.points.final[i].y = this.points.initial[i].y;
			this.points.final[i].z = this.points.initial[i].z;
		}

		// Reset the cubes
		for (let i = 0; i < this.cubes.length; i++) {
			for (let j = 0; j < this.cubes[i].vertices.final.length; j++) {
				this.cubes[i].vertices.final[j].x = this.cubes[i].vertices.initial[j].x;
				this.cubes[i].vertices.final[j].y = this.cubes[i].vertices.initial[j].y;
				this.cubes[i].vertices.final[j].z = this.cubes[i].vertices.initial[j].z;
			}
		}

		// Reset the matrices
		this.matrices = [];
	}

	this.clearVectorSpace = function() {
		this.vectors.initial = [];
		this.vectors.transition = [];
		this.vectors.final = [];
		this.points.initial = [];
		this.points.transition = [];
		this.points.final = [];
		this.matrices = [];

		// Add the basis vectors back
		this.addVector(100, 0, 0);
		this.addVector(0, 100, 0);
		this.addVector(0, 0, 100);
	}
}

// Define vector class
function Vec3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	this.add = function(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}
	this.sub = function(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
	}
	this.mult = function(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
	}
	this.div = function(n) {
		this.x /= n;
		this.y /= n;
		this.z /= n;
	}
	this.mag = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	this.normalize = function() {
		let m = this.mag();
		if (m != 0) {
			this.div(m);
		}
	}
	this.multMat = function(m) {
		let x = this.x * m.a + this.y * m.b + this.z * m.c;
		let y = this.x * m.d + this.y * m.e + this.z * m.f;
		let z = this.x * m.g + this.y * m.h + this.z * m.i;
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

// Define Matrix class
function Mat3(a, b, c, d, e, f ,g, h, i) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.e = e;
	this.f = f;
	this.g = g;
	this.h = h;
	this.i = i;

	this.matMult = function(m) {
		let a = this.a * m.a + this.b * m.d + this.c * m.g;
		let b = this.a * m.b + this.b * m.e + this.c * m.h;
		let c = this.a * m.c + this.b * m.f + this.c * m.i;
		let d = this.d * m.a + this.e * m.d + this.f * m.g;
		let e = this.d * m.b + this.e * m.e + this.f * m.h;
		let f = this.d * m.c + this.e * m.f + this.f * m.i;
		let g = this.g * m.a + this.h * m.d + this.i * m.g;
		let h = this.g * m.b + this.h * m.e + this.i * m.h;
		let i = this.g * m.c + this.h * m.f + this.i * m.i;
		return new Mat3(a, b, c, d, e, f, g, h, i);
	}
}

// Define Cube class
function Cube(origin, r, color) {
	this.origin = origin;
	this.r = r;
	this.color = color;
	this.vertices = {
		initial: [],
		final: []
	};

	this.addVertex = function(x, y, z) {
		this.vertices.initial.push(new Vec3(x, y, z));
		this.vertices.final.push(new Vec3(x, y, z));
	}

	// Add the vertices
	this.addVertex(origin.x + r, origin.y + r, origin.z + r);
	this.addVertex(origin.x + r, origin.y - r, origin.z + r);
	this.addVertex(origin.x - r, origin.y - r, origin.z + r);
	this.addVertex(origin.x - r, origin.y + r, origin.z + r);
	this.addVertex(origin.x + r, origin.y + r, origin.z - r);
	this.addVertex(origin.x + r, origin.y - r, origin.z - r);
	this.addVertex(origin.x - r, origin.y - r, origin.z - r);
	this.addVertex(origin.x - r, origin.y + r, origin.z - r);

	this.draw = function() {
		// Draw the final vertices
		// for (let i = 0; i < this.vertices.final.length; i++) {
		// 	drawVector(this.vertices.final[i], this.color);
		// }

		// Draw lines between the vertices
		drawLineBetweenPoints(this.vertices.final[0], this.vertices.final[1], this.color);
		drawLineBetweenPoints(this.vertices.final[1], this.vertices.final[2], this.color);
		drawLineBetweenPoints(this.vertices.final[2], this.vertices.final[3], this.color);
		drawLineBetweenPoints(this.vertices.final[3], this.vertices.final[0], this.color);

		drawLineBetweenPoints(this.vertices.final[4], this.vertices.final[5], this.color);
		drawLineBetweenPoints(this.vertices.final[5], this.vertices.final[6], this.color);
		drawLineBetweenPoints(this.vertices.final[6], this.vertices.final[7], this.color);
		drawLineBetweenPoints(this.vertices.final[7], this.vertices.final[4], this.color);

		drawLineBetweenPoints(this.vertices.final[0], this.vertices.final[4], this.color);
		drawLineBetweenPoints(this.vertices.final[1], this.vertices.final[5], this.color);
		drawLineBetweenPoints(this.vertices.final[2], this.vertices.final[6], this.color);
		drawLineBetweenPoints(this.vertices.final[3], this.vertices.final[7], this.color);
	}		
}
