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

// ------------------------------ Random Wireframe Generator ------------------------------
function generateRandomWireframe() {
	const rows = 10;
	const columns = 10;
	const max = 20;
	const min = 0;

	let wireframe = '';

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {

			let random = Math.floor(Math.random() * (max - min + 1)) + min;
			wireframe += random;
			if (j != columns - 1) {
				wireframe += ' ';
			}
		}
		if (i != rows - 1) {
			wireframe += '\n';
		}
	}

	return wireframe;
}

// ------------------------------ Creating Matrices ------------------------------

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

// Scaling matrix
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

// ------------------------------ Apply transformations ------------------------------

// Add isometric projection matrices
vs.addMatrix(getYAxisRotMat(Math.PI / 4));
vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));

// Add scaling matrix
let scale = 2.5;
vs.addMatrix(getScaleMat(scale, scale, scale));

// Apply transformations and draw the vector space
vs.applyMatrices();
vs.draw();

// ------------------------------ Animation loop ------------------------------
let angle = 0.015; // angle in radians
let rotate = false;

let fps = 60;
let interval = 1000 / fps;
let lastFrameTime = Date.now();

function animate() {
    requestAnimationFrame(animate);
    let now = Date.now();
    let elapsed = now - lastFrameTime;

    if (elapsed > interval) {
        lastFrameTime = now - (elapsed % interval);

        c.clearRect(0, 0, canvas.width, canvas.height);

        if (rotate) {
            vs.matrices = [];
            vs.addMatrix(getYAxisRotMat(angle));
            vs.applyMatrices();
        }
        vs.draw();
    }
}
animate();

// ------------------------------ Get random wireframe ------------------------------
const wireframeObjects = [
	"10-2.fdf",
	"basictest.fdf",
	"mars.fdf",
	"pyra.fdf",
	"10-70.fdf",
	"pentenegpos.fdf",
	"pyramide.fdf",
	"100-6.fdf",
	"pentenegpos_eric.fdf",
	"20-60.fdf",
	"elem.fdf",
	"plat.fdf",
	"42.fdf",
	"elem2.fdf",
	"pnp_flat.fdf",
	"50-4.fdf",
	"pylone.fdf"
  ];
  
async function getRandomWireframe() {
	const randomIndex = Math.floor(Math.random() * wireframeObjects.length);
	const randomWireframe = wireframeObjects[randomIndex];

	const response = await fetch('maps/' + randomWireframe);
	const data = await response.text();
	return data;
}