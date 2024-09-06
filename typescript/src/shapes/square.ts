interface Square extends Shape { }

function square(sideLen: number): Square {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export {Square,  square }