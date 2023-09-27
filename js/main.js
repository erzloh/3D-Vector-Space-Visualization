// ------------------------------ Creating objects ------------------------------
// Define the vector space
const vs = new VectorSpace();

// Add the basis vectors
vs.addVector(100, 0, 0, 'green');
vs.addVector(0, 100, 0, 'red');
vs.addVector(0, 0, 100, 'blue');

// Add points
// vs.addPoint(-50, 50, -100, 'green');

// Add cube
// vs.addCube(new Vec3(0, 0, 0), 100, 'black');

// Add wireframe
const wireframe42 = 
`0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0 10 10  0  0 10 10  0  0  0 10 10 10 10 10  0  0  0
0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
0  0 10 10 10 10 10 10  0  0  0  0 10 10 10 10  0  0  0
0  0  0 10 10 10 10 10  0  0  0 10 10  0  0  0  0  0  0
0  0  0  0  0  0 10 10  0  0  0 10 10  0  0  0  0  0  0
0  0  0  0  0  0 10 10  0  0  0 10 10 10 10 10 10  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0`;

const wireframePyramid =
`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0
0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 5 5 5 5 5 5 5 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 6 6 6 6 6 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 7 7 7 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 8 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 8 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 8 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 8 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 8 8 8 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 7 7 7 7 7 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 6 6 6 6 6 6 6 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 5 5 5 5 5 5 5 5 5 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 3 3 3 3 3 3 3 3 3 3 3 3 3 2 1 0 0 0 0 0
0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0 0
0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`;

// vs.addWireframe(wireframePyramid);
vs.addWireframe(wireframe42);

// Define matrices

// Rotation on the x-axis
function getXAxisRotMat(angle) {
    return [
        1, 0, 0,
        0, Math.cos(angle), -Math.sin(angle),
        0, Math.sin(angle), Math.cos(angle)
    ];
}

// Rotation on the y-axis
function getYAxisRotMat(angle) {
	return [
		Math.cos(angle), 0, Math.sin(angle),
		0, 1, 0,
		-Math.sin(angle), 0, Math.cos(angle)
	];
}

// Rotation on the z-axis
function getZAxisRotMat(angle) {
	return [
		Math.cos(angle), -Math.sin(angle), 0,
		Math.sin(angle), Math.cos(angle), 0,
		0, 0, 1
	];
}

// Scaling Matrices
function getScaleMat(x, y, z) {
	return [
		x, 0, 0,
		0, y, 0,
		0, 0, z
	];
}

// Orthogonal projection matrix
const orthogonalProjectionMat = [	1, 0, 0,
									0, 1, 0,
									0, 0, 0];

// Add matrices to the vector space

// Isometric projection Matrices
vs.addMatrix(getYAxisRotMat(Math.PI / 4));
vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));

// vs.addMatrix(getXAxisRotMat(0.01));
// vs.addMatrix(orthogonalProjectionMat);

// Apply transformations
vs.applyMatrices();

// Draw the vector space
vs.draw();

// ------------------------------ Animation loop ------------------------------
let angle = 0.015;
let rotate = false;

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	if (rotate) {
		vs.matrices = [];
		vs.addMatrix(getXAxisRotMat(angle));
		vs.applyMatrices();
	}
	vs.draw();
}
animate();

// ------------------------------ Event listeners ------------------------------
const rotateButton = document.getElementById('rotate-button');
rotateButton.addEventListener('click', function() {
	rotate = !rotate;
	if (rotate) {
		rotateButton.innerHTML = '!rotate';
	}
	else {
		rotateButton.innerHTML = 'rotate';
	}
});

// Zoom with the mouse wheel
const zoomInAmount = 1.1;
const zoomOutAmount = 0.9;

canvas.addEventListener('wheel', function(e) {
	// stop scrolling
	e.preventDefault();
	if (e.deltaY < 0) {
		vs.matrices = [];
		vs.addMatrix(getScaleMat(zoomOutAmount, zoomOutAmount, zoomOutAmount));
		vs.applyMatrices();
	}
	else {
		vs.matrices = [];
		vs.addMatrix(getScaleMat(zoomInAmount, zoomInAmount, zoomInAmount));
		vs.applyMatrices();
	}
});

// Rotate with the mouse
// --------------- State Variables ---------------
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// --------------- Mouse Event Listeners ---------------
canvas.addEventListener('mousedown', function(event) {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
	// rotate = false;
	// rotateButton.innerHTML = 'start';
});

// Turn around the world's axis
document.addEventListener('mousemove', function(event) {
    if (!isDragging) return;

    // Calculate the difference in mouse positions
    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

    // Convert these differences to angles - adjust the divisor for sensitivity
    const rotationAngleY = deltaX / canvas.width * (Math.PI);
    const rotationAngleX = deltaY / canvas.height * (Math.PI);

    // Reset transformations and apply new rotations
    vs.matrices = [];
    vs.addMatrix(getXAxisRotMat(rotationAngleX));
    vs.addMatrix(getYAxisRotMat(rotationAngleY));
    vs.applyMatrices();

    // Store current mouse position for the next frame
    previousMousePosition.x = event.clientX;
    previousMousePosition.y = event.clientY;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// canvas.addEventListener('mouseleave', function() {
//     isDragging = false;
// });

// Turn around the object's axis
// canvas.addEventListener('mousemove', function(event) {
//     if (!isDragging) return;

//     const deltaX = event.clientX - previousMousePosition.x;
//     const deltaY = event.clientY - previousMousePosition.y;

// 	let mouseSensitivity = 0.01;

// 	// console.log(deltaX, deltaY);

//     // Convert the deltaX and deltaY into rotation angles
//     rotationAngleX += (deltaY * Math.PI / 360);
//     rotationAngleY += (deltaX * Math.PI / 360);

// 	// console.log(angle_x,  angle_y);

//     // Reset and apply transformations
// 	vs.reset()
//     vs.addMatrix(getYAxisRotMat(rotationAngleY));
//     vs.addMatrix(getXAxisRotMat(rotationAngleX));
//     // vs.addMatrix(orthogonalProjectionMat);
//     vs.applyMatrices();

//     // Update the previous mouse position
//     previousMousePosition = {
//         x: event.clientX,
//         y: event.clientY
//     };
// });

// Reset scene when R is pressed
document.addEventListener('keydown', function(event) {
	if (event.key === 'r') {
		vs.reset();
		// vs.applyMatrices();
	}
});