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
0 0 0 0 0 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 0 0 0 0 0
0 0 0 0 0 5 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 15 15 15 15 15 15 15 15 15 15 15 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 25 25 25 25 25 25 25 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 30 30 30 30 30 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 35 35 35 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 40 40 40 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 40 40 40 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 40 40 40 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 40 40 40 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 40 45 40 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 35 35 35 35 35 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 30 30 30 30 30 30 30 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 25 25 25 25 25 25 25 25 25 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 20 20 20 20 20 20 20 20 20 20 20 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 15 15 15 15 15 15 15 15 15 15 15 15 15 10 5 0 0 0 0 0
0 0 0 0 0 5 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 5 0 0 0 0 0
0 0 0 0 0 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
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
let scale = 2.5;
vs.addMatrix(getScaleMat(scale, scale, scale));

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
let clickSound = document.getElementById('clickSound');

rotateButton.addEventListener('click', function() {
	rotate = !rotate;
	if (rotate) {
		rotateButton.innerHTML = 'stop';
	}
	else {
		rotateButton.innerHTML = 'rotate';
	}
	clickSound.volume = 0.05;
    clickSound.play();
});

// Zoom with the mouse wheel
const zoomInAmount = 1.1;
const zoomOutAmount = 0.9;

function zoomIn() {
	vs.matrices = [];
	vs.addMatrix(getScaleMat(zoomInAmount, zoomInAmount, zoomInAmount));
	vs.applyMatrices();
}

function zoomOut() {
	vs.matrices = [];
	vs.addMatrix(getScaleMat(zoomOutAmount, zoomOutAmount, zoomOutAmount));
	vs.applyMatrices();
}


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

// Reset scene when R is pressed
document.addEventListener('keydown', function(event) {
	if (event.key === 'r') {
		vs.reset();
		// vs.applyMatrices();
	}
});

// ------------------------------ Input Event Listener ------------------------------
const textarea = document.querySelector('textarea');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
	clickSound.volume = 0.05;
    clickSound.play();
	window.scrollTo(0, 0);

	vs.clearVectorSpace();
	vs.addWireframe(textarea.value);

	// Isometric projection Matrices
	vs.addMatrix(getYAxisRotMat(Math.PI / 4));
	vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));
	vs.applyMatrices();
	vs.draw();
});

// JavaScript-Code, um die Eingabe auf Zahlen, Leerzeichen und Enter-Taste zu beschränken
textarea.addEventListener("input", function(event) {
	const inputText = event.target.value;
	const filteredText = inputText.replace(/[^0-9\s\n-]/g, '');
	event.target.value = filteredText;
  });
  

  document.getElementById("down-icon").addEventListener("click", function() {
	window.scrollTo(0, window.innerHeight);
  });