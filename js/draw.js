// Define the canvas variables
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 800;
canvas.height = canvas.width * (9/16);

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