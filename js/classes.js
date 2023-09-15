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
	}

	this.transform = function(m) {
		// Transform the vectors
		for (let i = 0; i < this.vectors.final.length; i++) {
			this.vectors.final[i].multMat(m);
		}

		// Transform the points
		for (let i = 0; i < this.points.final.length; i++) {
			this.points.final[i].multMat(m);
		}
	}

	this.addMatrix = function(matArr) {
		this.matrices.push(new Mat3(matArr[0], matArr[1], matArr[2], matArr[3], matArr[4], matArr[5], matArr[6], matArr[7], matArr[8]));
	}

	this.applyMatrices = function() {
		// // Reset the final vectors to the initial vectors
		// for (let i = 0; i < this.vectors.final.length; i++) {
		// 	this.vectors.final[i].x = this.vectors.initial[i].x;
		// 	this.vectors.final[i].y = this.vectors.initial[i].y;
		// 	this.vectors.final[i].z = this.vectors.initial[i].z;
		// }

		// // Reset the final points to the initial points
		// for (let i = 0; i < this.points.final.length; i++) {
		// 	this.points.final[i].x = this.points.initial[i].x;
		// 	this.points.final[i].y = this.points.initial[i].y;
		// 	this.points.final[i].z = this.points.initial[i].z;
		// }

		// Apply the matrices to the vectors and points
		for (let i = 0; i < this.matrices.length; i++) {
			this.transform(this.matrices[i]);
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
}