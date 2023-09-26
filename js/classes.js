// --------------  Define vector space classes --------------
function VectorSpace() {
	// Initialize objects that can be created in the vector space
	this.objs = {
		vectors: [],
		points: [],
		cubes: [],
		wireframes: [],
	}

	// Initialize matrices list
	this.matrices = [];
	this.finalMat;

	this.addVector = function(x, y, z, color) {
		this.objs.vectors.push(new Vector(x, y, z, color));
	}

	this.addPoint = function(x, y, z, color) {
		this.objs.points.push(new Point(x, y, z, color));
	}

	this.addCube = function(origin, r, color) {
		this.objs.cubes.push(new Cube(origin, r, color));
	}

	this.addWireframe = function(fdfStr) {
		this.objs.wireframes.push(new Wireframe(fdfStr))
	}

	this.addMatrix = function(matArr) {
		this.matrices.push(new Mat3(matArr[0], matArr[1], matArr[2], matArr[3], matArr[4], matArr[5], matArr[6], matArr[7], matArr[8]));
	}

	this.draw = function() {
		drawOrigin();
		drawAxes();

		// Iterate through all the object types and draw each object of each type
		Object.keys(this.objs).forEach(objType => {
			this.objs[objType].forEach(obj => {
				obj.draw();
			})
		});
	}

	this.applyMatrices = function() {
		// Multiply all the matrices together
		for (let i = 0; i < this.matrices.length; i++) {
			if (i === 0) {
				this.finalMat = this.matrices[i];
			}
			else {
				this.finalMat = this.matrices[i].matmatMult(this.finalMat);
			}
		}

		// Apply the final matrix to all objects
		Object.keys(this.objs).forEach(objType => {
			this.objs[objType].forEach(obj => {
				for (let i = 0; i < obj.vertices.length; i++) {
					obj.vertices[i].final.multMat(this.finalMat);
				}
			})
		});
	}

	this.reset = function() {
		// Reset all objects to initial positions
		Object.keys(this.objs).forEach(objType => {
			this.objs[objType].forEach(obj => {
				for (let i = 0; i < obj.vertices.length; i++) {
					obj.reset();
				}
			})
		});

		// Reset the matrices
		this.matrices = [];
	}

	this.clearVectorSpace = function() {
		this.objs = {
			vectors: [],
			points: [],
			cubes: [],
			wireframes: [],
		}
		this.matrices = [];

		// Add the basis vectors back
		this.addVector(100, 0, 0, 'green');
		this.addVector(0, 100, 0, 'red');
		this.addVector(0, 0, 100, 'blue');
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

	this.matmatMult = function(m) {
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

// Define Vector object class
// As opposed to Vec3 which is just a simple vector data type,
// this is considerd as an object with it's own vertices (only one in this case).
function Vector(x, y, z, color) {
	// There is only one vertexx in this case
	this.vertices = [];
	this.vertices.push({
		initial: new Vec3(x, y, z),
		final: new Vec3(x, y, z)
	});
	this.color = color;

	this.draw = function() {
		drawLine(0, 0, this.vertices[0].final.x, this.vertices[0].final.y, this.color);
		drawCircle(this.vertices[0].final.x, this.vertices[0].final.y, 5, this.color, false);
	}

	this.reset = function() {
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i].final.x = this.vertices[i].initial.x;
			this.vertices[i].final.y = this.vertices[i].initial.y;
			this.vertices[i].final.z = this.vertices[i].initial.z;
		}
	}
}

// Define Point object class
function Point(x, y, z, color) {
	// There is only one vertex in this case
	this.vertices = [];
	this.vertices.push({
		initial: new Vec3(x, y, z),
		final: new Vec3(x, y, z)
	});
	this.color = color;

	this.draw = function(color) {
		drawCircle(this.vertices[0].final.x, this.vertices[0].final.y, 3, this.color, true);
	}

	this.reset = function() {
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i].final.x = this.vertices[i].initial.x;
			this.vertices[i].final.y = this.vertices[i].initial.y;
			this.vertices[i].final.z = this.vertices[i].initial.z;
		}
	}
}

// Define Cube class
function Cube(origin, r, color) {
	this.origin = origin;
	this.r = r;
	this.color = color;
	this.vertices = []

	this.addVertex = function(x, y, z) {
		this.vertices.push({
			initial: new Vec3(x, y, z),
			final: new Vec3(x, y, z)
		})
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
		// Draw the vectors from the origin to the vertices
		// for (let i = 0; i < this.vertices.length; i++) {
		// 	drawVector(this.vertices[i].final, this.color);
		// }

		// Draw lines between the vertices
		drawLineBetweenPoints(this.vertices[0].final, this.vertices[1].final, this.color);
		drawLineBetweenPoints(this.vertices[1].final, this.vertices[2].final, this.color);
		drawLineBetweenPoints(this.vertices[2].final, this.vertices[3].final, this.color);
		drawLineBetweenPoints(this.vertices[3].final, this.vertices[0].final, this.color);

		drawLineBetweenPoints(this.vertices[4].final, this.vertices[5].final, this.color);
		drawLineBetweenPoints(this.vertices[5].final, this.vertices[6].final, this.color);
		drawLineBetweenPoints(this.vertices[6].final, this.vertices[7].final, this.color);
		drawLineBetweenPoints(this.vertices[7].final, this.vertices[4].final, this.color);

		drawLineBetweenPoints(this.vertices[0].final, this.vertices[4].final, this.color);
		drawLineBetweenPoints(this.vertices[1].final, this.vertices[5].final, this.color);
		drawLineBetweenPoints(this.vertices[2].final, this.vertices[6].final, this.color);
		drawLineBetweenPoints(this.vertices[3].final, this.vertices[7].final, this.color);
	}

	this.reset = function() {
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i].final.x = this.vertices[i].initial.x;
			this.vertices[i].final.y = this.vertices[i].initial.y;
			this.vertices[i].final.z = this.vertices[i].initial.z;
		}
	}
}

// Define Wireframe Class
function Wireframe(mapStr) {
	this.basisScalar = 10;
	this.heightScalar = 10;
	this.map2dArr = mapStr.trim().split('\n').map(row => row.split(/\s+/).map(Number));
	this.vertices = [];

	// Add the vertices
	for (let i = 0; i < this.map2dArr.length; i++) {
		for (let j = 0; j < this.map2dArr[i].length; j++) {
			this.vertices.push({
				initial: new Vec3(j * this.basisScalar, (this.map2dArr.length - 1 - i) * this.basisScalar, this.map2dArr[i][j] * this.heightScalar),
				final: new Vec3(j * this.basisScalar, (this.map2dArr.length - 1 - i) * this.basisScalar, this.map2dArr[i][j] * this.heightScalar)
			})
		}
	}

	this.draw = function() {
		// Draw lines between the current vertex and the one to its right and to its bottom if it exists
		for (let i = 0; i < this.map2dArr.length; i++) {
			for (let j = 0; j < this.map2dArr[i].length; j++) {
				if (j < this.map2dArr[i].length - 1) {
					drawLineBetweenPoints(this.vertices[i * this.map2dArr[i].length + j].final, this.vertices[i * this.map2dArr[i].length + j + 1].final, `rgba(0, 0, 0, 1)`);
				}
				if (i < this.map2dArr.length - 1) {
					drawLineBetweenPoints(this.vertices[i * this.map2dArr[i].length + j].final, this.vertices[(i + 1) * this.map2dArr[i].length + j].final, `rgba(0, 0, 0, 1)`);
				}
			}
		}
	}

	this.reset = function() {
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i].final.x = this.vertices[i].initial.x;
			this.vertices[i].final.y = this.vertices[i].initial.y;
			this.vertices[i].final.z = this.vertices[i].initial.z;
		}
	}

	this.translate = function(x, y, z) {
		for (let i = 0; i < this.vertices.length; i++) {
			this.vertices[i].initial.x += x;
			this.vertices[i].initial.y += y;
			this.vertices[i].initial.z += z;

			this.vertices[i].final.x += x;
			this.vertices[i].final.y += y;
			this.vertices[i].final.z += z;
		}
	}
	this.translate(-this.map2dArr[0].length * this.basisScalar / 2, -this.map2dArr.length * this.basisScalar / 2, 0)
}