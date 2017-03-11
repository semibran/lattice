# grid
> Lightweight abstraction for storing and modifying two-dimensional data

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
var grid = Grid(data, cols, rows)
```
Creates a new `Grid` instance with the given data and dimensions.

The returned value is an object with the properties `data`, `cols` and `rows`, so the above factory is really just shorthand for the following:

```javascript
{ data: data, cols: cols, rows: rows }
```

### `get`
```javascript
Grid.get(grid, x, y)
```
Returns the value at `(x, y)` on `grid`, or `undefined` if out of range.

### `set`
```javascript
Grid.set(grid, x, y, value)
```
Sets the `value` at `(x, y)` on `grid` and returns `value`.

If the given position is out of range, the grid is not modified and `undefined` is returned.

## License
MIT
