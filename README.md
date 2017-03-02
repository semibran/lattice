# grid
> Simple abstraction for storing and modifying two-dimensional data

## Installation
```sh
npm install semibran/grid
```

## Usage
```javascript
const Grid = require('grid')
```

### Factory
```javascript
var grid = Grid(cols, rows[, data])
```
Creates a new `Grid` instance with the given data and dimensions.

### `get`
```javascript
Grid.get(grid, x, y)
```
Gets the value at `(x, y)` on `grid`.

### `set`
```javascript
Grid.set(grid, x, y, value)
```
Sets the `value` at `(x, y)` on `grid`.

### `inside`
```javascript
Grid.inside(grid, x, y)
```
Determines if the given `(x, y)` pair is inside `grid`.

## License
MIT
