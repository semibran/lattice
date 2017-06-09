# grid
> Deduce information from data structures with width and height fields

In this module, a `grid` refers to any object with the fields `width` and `height`.

## install
```sh
npm install semibran/grid
```

## usage
```javascript
const { contains, project, cells } = require('grid')
```

### `contains(grid, cell)`
Determines if the given `cell` is inside the `grid` dimensions.
```javascript
var grid = { width: 25, height: 25 }
contains(grid, { x: 4, y: 16 }) // true
contains(grid, { x: 25, y: 9 }) // false
```

### `project(grid, cell)`
Locates a `cell`'s corresponding one-dimensional index, or `null` if `cell` is out of bounds.
```javascript
var cell = { x: 12, y: 12 }
var index = project(world, cell)
world.tiles[index] = 'wall'
```
This function is designed for use on one-dimensional arrays representing two-dimensional data. In the above example, `world` would look something like this:
```javascript
var world = {
  width: 25,
  height: 25,
  tiles: new Array(25 * 25).fill('floor')
}
```

### `cells(grid)`
Constructs an array of length `grid.width * grid.height` consisting of cells within the bounds of the given `grid`.
```javascript
var nodes = cells(world).filter(cell => cell.x % 2 && cell.y % 2)
```
Note that creating this many objects at once may be a rather slow operation, especially with larger grids. Consider caching the result whenever possible or avoid using this function altogether.

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
