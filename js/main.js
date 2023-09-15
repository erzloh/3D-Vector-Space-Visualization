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

const ericMat = [	1, 0, -Math.sqrt(2) / 2,
					0, 1, -Math.sqrt(2) / 2,
					0, 0, 1];

// Rotation matrices

// Rotation on the x-axis
let angle_x = Math.PI / 4;

function getXAxisRotMat(angle) {
    return [
        1, 0, 0,
        0, Math.cos(angle), -Math.sin(angle),
        0, Math.sin(angle), Math.cos(angle)
    ];
}

// Rotation on the y-axis
let angle_y = Math.PI / 4;
// let angle_y = 0;

function getYAxisRotMat(angle) {
	return [
		Math.cos(angle), 0, Math.sin(angle),
		0, 1, 0,
		-Math.sin(angle), 0, Math.cos(angle)
	];
}

// Rotation on the z-axis
// let angle_z = Math.PI / 4;
let angle_z = 0;

function getZAxisRotMat(angle) {
	return [
		Math.cos(angle), -Math.sin(angle), 0,
		Math.sin(angle), Math.cos(angle), 0,
		0, 0, 1
	];
}

// Orthogonal projection matrix
const orthogonalProjectionMat = [	1, 0, 0,
									0, 1, 0,
									0, 0, 0];

// vs.addMatrix(xAxisRotMat);
// vs.addMatrix(yAxisRotMat);
// vs.addMatrix(zAxisRotMat);
vs.addMatrix(ericMat);
vs.addMatrix(orthogonalProjectionMat);

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
let angle = 0;
let rotationLength = 360; // In frames

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	angle += 2 * Math.PI / rotationLength;
	if (angle >= 2 * Math.PI) {
		angle = 0;
	}
	vs.reset();

	vs.addMatrix(getXAxisRotMat(angle));
	vs.addMatrix(getYAxisRotMat(angle));
	vs.addMatrix(getZAxisRotMat(angle));
	// vs.addMatrix(ericMat);
	vs.addMatrix(orthogonalProjectionMat);

	vs.applyMatrices();
	vs.draw(0.5);
}
animate();