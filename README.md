# grid
> Deduce information from data structures with width and height fields

In this module, a `grid` refers to any object with the fields `width` and `height`.

## usage
```javascript
const { contains, index, cells } = require('grid')
```

### `contains`
Determines if the given `cell` is inside the `grid` dimensions.
```javascript
var grid = { width: 25, height: 25 }
contains(grid, 4, 16) // true
contains(grid, 25, 9) // false
```

### `index`
Finds the corresponding one-dimensional index from the given `cell`.
```javascript
world.tiles[index(world, 12, 12)] = 'wall'
```
This function is designed for use on one-dimensional arrays representing two-dimensional data. In the above example, `world` would look something like this:
```javascript
var world = {
  width: 25,
  height: 25,
  tiles: new Array(25 * 25).fill('floor')
}
```

### `cells`
Constructs an array of length `grid.width * grid.height` consisting of cells within the bounds of the given `grid`.
```javascript
var nodes = cells(maze).filter(cell => cell.x % 2 && cell.y % 2)
```
A "cell" is just an object with the fields `x` and `y`, so it is possible to manipulate a cell with [`vector2d`](https://github.com/semibran/vector2d) or a similar library.


## install
```sh
npm install semibran/grid
```

## license
MIT
