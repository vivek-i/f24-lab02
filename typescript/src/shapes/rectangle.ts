interface Rectangle extends Shape { }

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export {Rectangle,  newRectangle }
