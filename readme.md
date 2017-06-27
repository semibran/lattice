# lattice
Multidimensional arrays are most efficiently expressed as flat, one-dimensional arrays containing the desired data in sequence. However, retrieving and modifying values from such an array often requires some complex math.

This module abstracts away said formulas to facilitate the use of flattened multidimensional arrays in your code.

## usage
```js
const { contains, flatten, project } = require('lattice')
```

### `contains(point, space) -> boolean`
Determines if the given `point` is inside `space`.
```js
> var space = [25, 25]
[25, 25]

> contains([4, 16], space)
true

> contains([12, 25], space)
false
```

### `flatten(point, space) -> index`
Unwraps a point into its corresponding one-dimensional index.
```js
var index = flatten([12, 12], world.size)
world.tiles[index] = 1
```

In the above example, `world` would be an object of the following form.
```js
var world = {
  size: [25, 25],
  tiles: new Uint8Array(25 * 25)
}
```

This function is a dimension-agnostic implementation of [a common address calculation algorithm](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Address_calculation_in_general), which usually appears in the form `y * width + x` when reading from flattened two-dimensional arrays.

### `project(index, space) -> point`
Wraps an index into its corresponding multidimensional point.
```js
> project(312, [25, 25])
[12, 12]
```
```js
game.state.map((alive, index) => {
  var point = project(index, game.space)
  var score = moore(1, game.space.length)
    .map(neighbor => add(cell, neighbor))
    .map(neighbor => wrap(neighbor, game.space))
    .reduce((score, neighbor) => score + game.state[flatten(neighbor, game.space)], 0)
  return score === 3 || score === 2 && alive
})
```

## see also
- [`semibran/vector`](https://github.com/semibran/vector) - basic operations for multidimensional vectors

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
