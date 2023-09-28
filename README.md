# Wireframe Viewer

Visualize 3D wireframes in a simple, interactive viewer.

![Description of GIF](demo.gif)

I made this project alongside my learning of Linear Algebra to put into practice what I learned from theory. For those interested in the topic, I can't recommend enough the [Essence of Linear Algebra video series](https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=zM29JPzZTQTrPIRR) from 3Blue1Brown.

I already did a similar program written in C as a school project (cf. [42-FdF](https://github.com/erzloh/42-FdF/tree/main)). This time, it's written only in pure JavaScript, HTML and CSS.

## Live Demo
You can try the project [here](https://erzloh.github.io/3D-Vector-Space-Visualization/)!

## Features

- Render wireframes from 2D heightmaps
- Real-time rotation
- Orthographic projection
- Interactive user interface with rotate and scale functionality

## Code Overview

The application consists of the following main classes:

- **VectorSpace:** An environment that houses vectors, points, cubes, and wireframes.
- **Vec3:** A 3-dimensional vector with various vector operations.
- **Mat3:** A 3x3 matrix with matrix operations.
- **Vector:** Represents an object with an end vertex.
- **Point:** Represents a single point in space.
- **Cube:** A cube defined by its origin and radius.
- **Wireframe:** A collection of vertices and edges created from a 2D map string.

## Add Your Own Wireframe Heightmaps


1. **Open Developer Tools**: Simply right-click on the webpage and select `Inspect` from the dropdown menu.
2. Navigate to the `Console` tab.
3. Before you begin, you need to clear the vector space. Use the following command:
   ```javascript
   vs.clearVectorSpace();
4. Now, you can add your wireframe using the vs.addWireframe() function. 
	```javascript
	vs.addWireframe(yourHeightMap);
	```
###  Example of Heightmap
```javascript
const heightmap42 = 
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
```
	
```javascript
const heightMapPyramid =
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
```