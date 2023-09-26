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
const fdfString = `0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
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

// vs.addFDF(`0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
// 0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
// 0  0 10 10  0  0 10 10  0  0  0 10 10 10 10 10  0  0  0
// 0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
// 0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
// 0  0 10 10 10 10 10 10  0  0  0  0 10 10 10 10  0  0  0
// 0  0  0 10 10 10 10 10  0  0  0 10 10  0  0  0  0  0  0
// 0  0  0  0  0  0 10 10  0  0  0 10 10  0  0  0  0  0  0
// 0  0  0  0  0  0 10 10  0  0  0 10 10 10 10 10 10  0  0
// 0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
// 0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0`);

vs.addWireframe(`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
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
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`);

// Define matrices
const ericMat = [	1, 0, -Math.sqrt(2) / 2,
					0, 1, -Math.sqrt(2) / 2,
					0, 0, 1];

// Rotation matrices

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

// Orthogonal projection matrix
const orthogonalProjectionMat = [	1, 0, 0,
									0, 1, 0,
									0, 0, 0];

// Add matrices to the vector space

// Isometric projection Matrices
vs.addMatrix(getYAxisRotMat(Math.PI / 4));
vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));

vs.addMatrix(getXAxisRotMat(0.01));
// vs.addMatrix(orthogonalProjectionMat);

// Apply transformations
vs.applyMatrices();

// Draw the vector space
vs.draw();

// ------------------------------ Animation loop ------------------------------
let angle = 0.01;
let rotationLength = 360; // In frames
let rotate = false;

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	if (rotate)
	{
		// angle += 2 * Math.PI / rotationLength;
		// if (angle >= 2 * Math.PI) {
		// 	angle = 0;
		// }
		// vs.reset();

		// vs.addMatrix(getYAxisRotMat(Math.PI / 4));
		// vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));

		// vs.addMatrix(getXAxisRotMat(angle));
		// vs.addMatrix(getYAxisRotMat(angle));
		// vs.addMatrix(getZAxisRotMat(angle));
		// vs.addMatrix(orthogonalProjectionMat);
		vs.applyMatrices();
	}
	// vs.addMatrix(ericMat);

	vs.draw();
}
animate();

// ------------------------------ Event listeners ------------------------------
const rotateButton = document.getElementById('rotate-button');
rotateButton.addEventListener('click', function() {
	rotate = !rotate;
	if (rotate) {
		rotateButton.innerHTML = 'stop';
		// vs.reset();
		// vs.addMatrix(getYAxisRotMat(Math.PI / 4));
		// vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));
		// vs.applyMatrices();
		vs.matrices = [];
		vs.addMatrix(getXAxisRotMat(0.01));
	}
	else {
		rotateButton.innerHTML = 'start';
	}
});

// Zoom with the mouse wheel

const zoomInAmount = 1.1;
const zoomOutAmount = 0.9;

canvas.addEventListener('wheel', function(e) {
	// stop scrolling
	e.preventDefault();
	if (e.deltaY < 0) {
		console.log('zoom in');
		for (let i = 0; i < vs.fdfObjs.length; i++) {
			for (let j = 0; j < vs.fdfObjs[i].vertices.final.length; j++) {
				vs.fdfObjs[i].vertices.initial[j].x *= zoomOutAmount;
				vs.fdfObjs[i].vertices.initial[j].y *= zoomOutAmount;
				vs.fdfObjs[i].vertices.initial[j].z *= zoomOutAmount;

				vs.fdfObjs[i].vertices.final[j].x *= zoomOutAmount;
				vs.fdfObjs[i].vertices.final[j].y *= zoomOutAmount;
				vs.fdfObjs[i].vertices.final[j].z *= zoomOutAmount;
			}
		}
	}
	else {
		console.log('zoom out');
		for (let i = 0; i < vs.fdfObjs.length; i++) {
			for (let j = 0; j < vs.fdfObjs[i].vertices.final.length; j++) {
				vs.fdfObjs[i].vertices.initial[j].x *= zoomInAmount;
				vs.fdfObjs[i].vertices.initial[j].y *= zoomInAmount;
				vs.fdfObjs[i].vertices.initial[j].z *= zoomInAmount;

				vs.fdfObjs[i].vertices.final[j].x *= zoomInAmount;
				vs.fdfObjs[i].vertices.final[j].y *= zoomInAmount;
				vs.fdfObjs[i].vertices.final[j].z *= zoomInAmount;
			}
		}
	}
});

// Rotate with the mouse
// --------------- State Variables ---------------
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

let angle_x = 0;
let angle_y = 0;

// --------------- Mouse Event Listeners ---------------
canvas.addEventListener('mousedown', function(event) {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
	rotate = false;
	rotateButton.innerHTML = 'start';
});

canvas.addEventListener('mousemove', function(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    const deltaY = event.clientY - previousMousePosition.y;

	console.log(deltaX, deltaY);

    // Convert the deltaX and deltaY into rotation angles
    angle_x += deltaY * Math.PI / 180; // Scaling factor for sensitivity
    angle_y += deltaX * Math.PI / 180;

	// console.log(angle_x,  angle_y);

    // Reset and apply transformations
    vs.reset();
    vs.addMatrix(getYAxisRotMat(angle_y));
    vs.addMatrix(getXAxisRotMat(angle_x));
    // vs.addMatrix(orthogonalProjectionMat);
    vs.applyMatrices();

    // Update the previous mouse position
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

canvas.addEventListener('mouseup', function() {
    isDragging = false;
});

canvas.addEventListener('mouseleave', function() {
    isDragging = false;
});