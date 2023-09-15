// Define the canvas variables
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 800;
canvas.height = canvas.width * (9/16);

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

	this.addMatrix = function(a, b, c, d, e, f, g, h, i) {
		this.matrices.push(new Mat3(a, b, c, d, e, f, g, h, i));
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

// -------------------------  Define drawing functions ----------------------------
const drawLine = (x1, y1, x2, y2, color) => {
	// Invert the y-axis
	y1 = -y1;
	y2 = -y2;

	// Translate the origin to the center of the canvas
	x1 += canvas.width / 2;
	y1 += canvas.height / 2;
	x2 += canvas.width / 2;
	y2 += canvas.height / 2;

	// Draw the line
	c.beginPath();
	c.moveTo(x1, y1);
	c.lineTo(x2, y2);
	c.strokeStyle = color;
	c.stroke();
}

const drawCircle = (x, y, r, color, fill) => {
	// Invert the y-axis
	y = -y;

	// Translate the origin to the center of the canvas
	x += canvas.width / 2;
	y += canvas.height / 2;

	// Draw the circle
	c.beginPath();
	c.arc(x, y, r, 0, Math.PI * 2, false);
	c.strokeStyle = color;
	if (fill === true)
	{
		c.fillStyle = color;
		c.fill();
	}
	c.stroke();
}

const drawVector = (v, color) => {
	drawLine(0, 0, v.x, v.y, color);
	drawCircle(v.x, v.y, 5, color, false);
}

const drawOrigin = () => {
	drawCircle(0, 0, 3, 'black', true);
}

const drawAxes = () => {
	drawLine(-canvas.width / 2, 0, canvas.width / 2, 0, 'rgba(0, 0, 0, 0.3)');
	drawLine(0, -canvas.height / 2, 0, canvas.height / 2, 'rgba(0, 0, 0, 0.3)');
}

const drawGrid = () => {
	// Draw vectical lines
	for (let i = 0; i < canvas.width / 2; i += 10) {
		drawLine(i, -canvas.height / 2, i, canvas.height / 2, 'rgba(0, 0, 0, 0.1)');
	}
	for (let i = 0; i > -canvas.width / 2; i -= 10) {
		drawLine(i, -canvas.height / 2, i, canvas.height / 2, 'rgba(0, 0, 0, 0.1)');
	}

	// Draw horizontal lines
	for (let i = 0; i < canvas.height / 2; i += 10) {
		drawLine(-canvas.width / 2, i, canvas.width / 2, i, 'rgba(0, 0, 0, 0.1)');
	}
	for (let i = 0; i > -canvas.height / 2; i -= 10) {
		drawLine(-canvas.width / 2, i, canvas.width / 2, i, 'rgba(0, 0, 0, 0.1)');
	}
}

const drawLineBetweenPoints = (v1, v2, color) => {
	drawLine(v1.x, v1.y, v2.x, v2.y, color);
}

// ------------------------------ Creating objects ------------------------------
// Define the vector space
const vs = new VectorSpace();

// Add the basis vectors
vs.addVector(100, 0, 0);
vs.addVector(0, 100, 0);
vs.addVector(0, 0, 100);

// Add vertices of a cube
vs.addPoint(50, 50, 50);
vs.addPoint(50, -50, 50);
vs.addPoint(-50, -50, 50);
vs.addPoint(-50, 50, 50);
vs.addPoint(50, 50, -50);
vs.addPoint(50, -50, -50);
vs.addPoint(-50, -50, -50);
vs.addPoint(-50, 50, -50);

// Add matrices

// Rotation matrices
let angle = Math.PI / 4;
// let angle_x = Math.asin(Math.tan(Math.PI / 6));
let angle_x = Math.PI / 4;
let angle_y = Math.PI / 4;
// Rotation on the x-axis
vs.addMatrix(1, 0, 0, 0, Math.cos(angle_x), -Math.sin(angle_x), 0, Math.sin(angle_x), Math.cos(angle_x));
// Rotation on the y-axis
vs.addMatrix(Math.cos(angle_y), 0, Math.sin(angle_y), 0, 1, 0, -Math.sin(angle_y), 0, Math.cos(angle_y));
// Rotation on the z-axis
// vs.addMatrix(Math.cos(angle), -Math.sin(angle), 0, Math.sin(angle), Math.cos(angle), 0, 0, 0, 1);

// Orthogonal projection matrix
vs.addMatrix(1, 0, 0, 0, 1, 0, 0, 0, 0);

// Apply transformations
vs.applyMatrices();

// Draw the vector space
vs.draw(1);

// ------------------------------ Event listeners ------------------------------
canvas.addEventListener('click', function() {
	// c.clearRect(0, 0, canvas.width, canvas.height);
	// vs.draw(1);
});

// ------------------------------ Animation loop ------------------------------
let angleX = 0;
let rotationLength = 360; // In frames

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	angleX += 2 * Math.PI / rotationLength;
	if (angleX >= 2 * Math.PI) {
		angleX = 0;
	}
	vs.reset();
	// vs.addMatrix(1, 0, 0, 0, Math.cos(angleX), -Math.sin(angleX), 0, Math.sin(angleX), Math.cos(angleX));
	// vs.addMatrix(Math.cos(angleX), 0, Math.sin(angleX), 0, 1, 0, -Math.sin(angleX), 0, Math.cos(angleX));

	// vs.addMatrix(1, 0, 0, 0, Math.cos(angleX + 15), -Math.sin(angleX + 15), 0, Math.sin(angleX + 15), Math.cos(angleX + 15));
	// vs.addMatrix(Math.cos(60), 0, Math.sin(60), 0, 1, 0, -Math.sin(60), 0, Math.cos(60)); 
	vs.addMatrix(Math.cos(angleX), -Math.sin(angleX), 0, Math.sin(angleX), Math.cos(angleX), 0, 0, 0, 1);

	vs.addMatrix(1, 0, 0, 0, 1, 0, 0, 0, 0);

	vs.applyMatrices();
	vs.draw(0.5);
}
// animate();