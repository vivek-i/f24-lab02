import { newRenderer } from "./renderer.js"
import { Rectangle, newRectangle } from "./shapes/rectangle.js";
import { Circle, circle } from "./shapes/circle.js";
import { Square, square } from "./shapes/square.js";

const rectangle: Rectangle = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const squareObject: Square = square(5)
const squareRenderer = newRenderer(squareObject)
squareRenderer.draw();

const circleObject: Circle = circle(5)
const circleRenderer = newRenderer(circleObject)
circleRenderer.draw();