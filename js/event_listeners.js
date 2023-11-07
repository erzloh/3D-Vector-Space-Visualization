// ------------------------------ Event listeners ------------------------------
const rotateButton = document.getElementById('rotate-button');
let clickSound = document.getElementById('clickSound');

// Rotate button
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

// ------------------------------ Zoom ------------------------------
const zoomInAmount = 1.1;
const zoomOutAmount = 0.9;

function zoomIn(zoomInAmount) {
	vs.matrices = [];
	vs.addMatrix(getScaleMat(zoomInAmount, zoomInAmount, zoomInAmount));
	vs.applyMatrices();
}

function zoomOut(zoomOutAmount) {
	vs.matrices = [];
	vs.addMatrix(getScaleMat(zoomOutAmount, zoomOutAmount, zoomOutAmount));
	vs.applyMatrices();
}

// Zoom with the mouse wheel
canvas.addEventListener('wheel', function(e) {
  e.preventDefault();
  if (e.deltaY < 0) {
    zoomIn(zoomInAmount);
  } else {
    zoomOut(zoomOutAmount);
  }
});

// Zoom with the fingers
let initialTouchDistance = 0;
let currentTouchDistance = 0;

canvas.addEventListener('touchstart', function(e) {
  if (e.touches.length === 2) {
    // Berechne den initialen Abstand zwischen den beiden Fingern
    initialTouchDistance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
  }
  e.preventDefault();
});

canvas.addEventListener('touchmove', function(e) {
  if (e.touches.length === 2) {
    // Berechne den aktuellen Abstand zwischen den beiden Fingern
    currentTouchDistance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );

    // Vergleiche den aktuellen Abstand mit dem initialen Abstand, um die Zoom-Richtung zu bestimmen
    if (currentTouchDistance > initialTouchDistance) {
      zoomIn(1.02);
    } else {
      zoomOut(0.98);
    }
	e.preventDefault();
  }
});

// ------------------------------ Rotation ------------------------------
// State Variables
let isDragging = false;
let previousMousePosition = {
	x: 0,
    y: 0
};

// Rotate with the mouse
canvas.addEventListener('mousedown', function(event) {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
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

// Rotate with a finger
canvas.addEventListener('touchstart', function(event) {
    isDragging = true;
    previousTouchPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    };
    event.preventDefault();
});

canvas.addEventListener('touchmove', function(event) {
    if (!isDragging) return;

    // Calculate the difference in touch positions
    const deltaX = event.touches[0].clientX - previousTouchPosition.x;
    const deltaY = event.touches[0].clientY - previousTouchPosition.y;

    // Convert these differences to angles - adjust the divisor for sensitivity
    const rotationAngleY = deltaX / canvas.width * Math.PI;
    const rotationAngleX = deltaY / canvas.height * Math.PI;

    // Reset transformations and apply new rotations
    vs.matrices = [];
    vs.addMatrix(getXAxisRotMat(rotationAngleX));
    vs.addMatrix(getYAxisRotMat(rotationAngleY));
    vs.applyMatrices();

    // Store current touch position for the next frame
    previousTouchPosition.x = event.touches[0].clientX;
    previousTouchPosition.y = event.touches[0].clientY;
    event.preventDefault();
});

canvas.addEventListener('touchend', function() {
    isDragging = false;
});

canvas.addEventListener('touchcancel', function() {
    isDragging = false;
});


// Reset scene when R is pressed
document.addEventListener('keydown', function(event) {
	if (event.key === 'r') {
		vs.reset();
		// vs.applyMatrices();
	}
});

// ------------------------------ Button Event Listener ------------------------------
const textarea = document.querySelector('textarea');
const submitButton = document.getElementById('submit-button');
const randomButton = document.getElementById('random-button');

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

// Filter input
textarea.addEventListener("input", function(event) {
	const inputText = event.target.value;
	const filteredText = inputText.replace(/[^0-9\s\n-]/g, '');
	event.target.value = filteredText;
  });
  

  document.getElementById("down-icon").addEventListener("click", function() {
	// window.scrollTo(0, window.innerHeight);
	document.querySelector('#second-page').scrollIntoView({ behavior: "smooth" });
  });

  randomButton.addEventListener('click', function() {
	clickSound.volume = 0.05;
	clickSound.play();
	window.scrollTo(0, 0);

	vs.clearVectorSpace();
	
	const randomWireframe = generateRandomWireframe();
	textarea.value = randomWireframe;
	vs.addWireframe(randomWireframe);
	
	// Isometric projection Matrices
	vs.addMatrix(getYAxisRotMat(Math.PI / 4));
	vs.addMatrix(getXAxisRotMat(Math.asin(Math.tan(Math.PI / 6))));
	vs.applyMatrices();
	vs.draw();
});
