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

The returned value is simply a function with the properties `data`, `cols` and `rows`.

### `get`
```javascript
grid(x, y)
```
Gets the value at `(x, y)` on `grid`.

### `set`
```javascript
grid(x, y, value)
```
Sets the `value` at `(x, y)` on `grid`.

## License
MIT
