# Wireframe Viewer

Visualize 3D wireframes in a simple, interactive viewer.

![Description of GIF](wireframe.gif)

I made this project alongside my learning of Linear Algebra to put into practice what I learned from theory. For those interested in the topic, I can't recommend enough the [Essence of Linear Algebra video series](https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=zM29JPzZTQTrPIRR) from 3Blue1Brown.

I already did a similar program written in C as a school project (cf. [42-FdF](https://github.com/erzloh/42-FdF/tree/main)). This time, it's written only in pure JavaScript, HTML, and CSS.

## Try the thing!
You can try the project [here](https://erzloh.github.io/Wireframe-Viewer/)!

## Features

- Render wireframes from 2D heightmaps
- Real-time rotation
- Orthographic projection
- Interactive user interface with rotate and scale functionality
- Compatible on mobiles
- Neat UI/UX

## Code Overview

The application consists of the following main classes:

- **VectorSpace:** An environment that houses vectors, points, cubes, and wireframes.
- **Vec3:** A 3-dimensional vector with various vector operations.
- **Mat3:** A 3x3 matrix with matrix operations.
- **Vector:** Represents an object with an end vertex.
- **Point:** Represents a single point in space.
- **Cube:** A cube defined by its origin and radius.
- **Wireframe:** A collection of vertices and edges created from a 2D map string.

###  Example of Heightmaps
Input:
```
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0 10 10  0  0 10 10  0  0  0 10 10 10 10 10  0  0  0
0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
0  0 10 10  0  0 10 10  0  0  0  0  0  0  0 10 10  0  0
0  0 10 10 10 10 10 10  0  0  0  0 10 10 10 10  0  0  0
0  0  0 10 10 10 10 10  0  0  0 10 10  0  0  0  0  0  0
0  0  0  0  0  0 10 10  0  0  0 10 10  0  0  0  0  0  0
0  0  0  0  0  0 10 10  0  0  0 10 10 10 10 10 10  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
```
Output:
![スクリーンショット 2023-09-28 8 57 27](https://github.com/erzloh/3D-Vector-Space-Visualization/assets/48589114/586c9242-870b-4635-a8d8-d5a206fb076c)

Input:
	
```
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
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
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
```

Output:
![スクリーンショット 2023-09-28 8 54 37](https://github.com/erzloh/3D-Vector-Space-Visualization/assets/48589114/a8ea118f-4e27-4d5a-8d59-d22cdd6a466b)

